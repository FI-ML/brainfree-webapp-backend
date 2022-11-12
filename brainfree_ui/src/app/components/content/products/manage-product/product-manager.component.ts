import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

import {addProduct, updateProduct} from "../../../../store/products/state/product.actions";
import {map, startWith} from "rxjs/operators";
import {StringUtilsService} from "../../../../services/utils/string-utils.service";
import {Product} from "../../../../models/product";
import {select, Store} from "@ngrx/store";
import {
  selectLoadingState,
  selectProducts,
  selectSingleProduct
} from "../../../../store/products/state/product.reducer";
import {selectShoppingCart} from "../../../../store/carts/state/carts.reducer";
import {ProductUtilsService} from "../../../../services/utils/product-utils.service";

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  @Input() product!: Product;
  @Input() isManageModeActive!: boolean;

  @Output() enableManageMode = new EventEmitter<boolean>();

  isUpdateEvent!: boolean;
  productFormGroup!: FormGroup;
  filteredCategories: Observable<string[]> | undefined;
  loading$!: Observable<boolean>;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly productStore: Store<Product>,
              private readonly stringUtils: StringUtilsService,
              private readonly productUtilsService: ProductUtilsService) {
  }

  priceEuroFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });

  ngOnInit(): void {
    this.initializeProductFormGroup();
    this.setFilteredCategories();
  }

  initializeProductFormGroup = (): FormGroup => {
    let product = this.product;

    return this.productFormGroup = this.formBuilder.group({
      name: new FormControl({
        value: this.stringUtils.getText(product.name),
        disabled: !this.isManageModeActive
      }, []),

      description: new FormControl({
        value: this.stringUtils.getText(product.description),
        disabled: !this.isManageModeActive

      }, []),
      priceAccording: new FormControl({
          value: this.stringUtils.getText(product.priceAccording),
          disabled: !this.isManageModeActive
        },
        []),
      price: new FormControl({
        value: this.getFormatterPrice(product.price),
        disabled: !this.isManageModeActive
      }, []),
      category: new FormControl({
        value: this.product ? this.product.category : null,
        disabled: !this.isManageModeActive
      }, [])
    });
  }

  get controlName(): FormControl {
    return (<FormControl>this.productFormGroup.get('name'));
  }

  get controlDescription(): FormControl {
    return (<FormControl>this.productFormGroup.get('description'));
  }

  get controlPriceAccording(): FormControl {
    return (<FormControl>this.productFormGroup.get('priceAccording'));
  }

  get controlPrice(): FormControl {
    return (<FormControl>this.productFormGroup.get('price'));
  }

  get controlCategory(): FormControl {
    return (<FormControl>this.productFormGroup.get('category'));
  }

  updateOrCreateProduct = () => {

    this.loading$ = this.productStore.pipe(select(selectLoadingState));
    let product = this.initProduct();

    if (this.isUpdateEvent) {
      this.productStore.dispatch(updateProduct({product}));
    } else {
      this.productStore.dispatch(addProduct({product}));
    }

    if (this.hasTheGenerateUpdateWorked(product.articleNumber)) {
      this.disableProductManageMode()
    }
  }


  updateProduct = () => {
    this.isManageModeActive = true;
    this.enableControls();
    this.isUpdateEvent = true;
  }

  disableProductManageMode = () => {
    this.isManageModeActive = false;
    this.disableControls();
    this.enableManageMode.emit(this.isManageModeActive);
  }

  hasTheGenerateUpdateWorked = (articleNumber: string): boolean => {
    return !!this.productStore.select(selectSingleProduct(articleNumber));
  }

  addProductToCart(): void {
    this.productUtilsService.addProductToCart(selectShoppingCart, this.product.articleNumber);
  }

  private initProduct = (): Product => {
    let code = '';

    if (this.product) {
      code = this.product.articleNumber;
    }

    return {
      name: this.controlName.value,
      category: this.controlCategory.value,
      articleNumber: code,
      description: this.controlDescription.value,
      priceAccording: this.controlPriceAccording.value,
      price: parseFloat(this.controlPrice.value.replace('€', ''))
    }
  }

  private enableControls = (): void => {
    this.productFormGroup.controls['name'].enable();
    this.productFormGroup.controls['description'].enable();
    this.productFormGroup.controls['priceAccording'].enable();
    this.productFormGroup.controls['price'].enable();
    this.productFormGroup.controls['category'].enable();
  }

  private disableControls = (): void => {
    this.productFormGroup.controls['name'].disable();
    this.productFormGroup.controls['description'].disable();
    this.productFormGroup.controls['priceAccording'].disable();
    this.productFormGroup.controls['price'].disable();
    this.productFormGroup.controls['category'].disable();
  }

  private setFilteredCategories(): void {
    this.filteredCategories = this.productFormGroup.controls['category'].valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filterCategory(value))
    );
  }

  private filterCategory(value: string): string[] {

    let categories: Array<string> = [];

    this.productStore.pipe(select(selectProducts)).subscribe(products => {
      products.forEach(e => {
        if (!categories.includes(e.category)) {
          categories.push(e.category);
        }
      })
    })

    return categories.filter(category => category.indexOf(value) === 0);
  }

  private getFormatterPrice = (price: number): string => {
    return this.priceEuroFormatter.format(price)
  }
}
