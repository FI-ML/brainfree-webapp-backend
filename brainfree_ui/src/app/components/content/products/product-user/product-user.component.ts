import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StringUtilsService} from "../../../../services/utils/string-utils.service";
import {Product} from "../../../../models/product";
import {Store} from "@ngrx/store";
import {Cart} from "../../../../models/cart";
import {selectShoppingCart} from "../../../../store/carts/state/carts.reducer";
import {ProductUtilsService} from "../../../../services/utils/product-utils.service";

@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrls: ['./product-user.component.scss'],
})
export class ProductUserComponent implements OnInit {

  @Input() product!: Product;
  @Output() openProductDescriptionDialog = new EventEmitter<Product>();
  productFormGroupOne!: FormGroup;

  priceEuroFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,

  });

  constructor(private readonly formBuilder: FormBuilder,
              private readonly stringUtils: StringUtilsService,
              private readonly cartState: Store<Cart>,
              private readonly productUtilsService: ProductUtilsService) {
  }

  ngOnInit(): void {
  }

  initializeProductFormGroup(): void {
    let product = this.product;

    this.productFormGroupOne = this.formBuilder.group({
      name: new FormControl({
        value: this.stringUtils.getText(product.name),
        disabled: true
      }, []),

      description: new FormControl({
        value: this.stringUtils.getText(product.description),
        disabled: true

      }, []),
      priceAccording: new FormControl({
          value: this.stringUtils.getText(product.priceAccording),
          disabled: true
        },
        []),
      price: new FormControl({
        value: this.getFormattedPrice(product.price),
        disabled: true
      }, []),
      category: new FormControl({
        value: this.product ? this.product.category : null,
        disabled: true
      }, [])
    });
  }

  get controlName() {
    return (<FormControl>this.productFormGroupOne.get('name'));
  }

  openDescription = (): void => {
    this.openProductDescriptionDialog.emit(this.product);
  }

  getFormattedPrice = (price: number): string => {
    return price.toFixed(2) + ' €';
  }


  addProductToCart(): void {
    this.productUtilsService.addProductToCart(selectShoppingCart, this.product.articleNumber);
  }

}
