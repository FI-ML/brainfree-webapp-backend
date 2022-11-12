import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Product} from "../../../models/product";
import {Observable} from "rxjs";
import {KeycloakService} from "keycloak-angular";
import {ROLES} from "../../../enums/roles";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {ProductDescriptionComponent} from "./product-description/product-description.component";
import {LOADING_TITLES} from "../../../enums/loading_titles";
import {selectLoadingState, selectProducts} from "../../../store/products/state/product.reducer";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  loadingState = true;
  products!: Array<Product>;
  productsSlice!: Array<Product>;
  products$!: Observable<Product[]>;
  loading$!: Observable<boolean>;
  isUserProductManager!: boolean;
  isManageModeActive!: boolean;
  name = LOADING_TITLES.PRODUCT;
  pageIndex = 12;

  constructor(private readonly productStore: Store<Product>,
              private readonly keycloakService: KeycloakService,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dispatchLoadingState();
    this.dispatchProductsFromState();
    this.isUserProductManager = this.isUserInRoleProductManger();
  }

  OnPageChanged = (event: PageEvent): void => {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.products.length) {
      endIndex = this.products.length;
    }
    this.productsSlice = this.products.slice(startIndex, endIndex);
  }


  isUserInRoleProductManger = (): boolean => {
    return this.keycloakService.getUserRoles().includes(ROLES.PRODUCT_MANAGER);
  }

  getEmptyProduct = () => {
    return {
      name: '',
      articleNumber: '',
      category: '',
      description: '',
      priceAccording: '',
      price: 0
    };
  }

  enableManageProductMode = (): void => {
    this.isManageModeActive = true;
  }

  disableManageProductMode(value: boolean) {
    this.isManageModeActive = value;
  }

  openProductDescriptionDialog = (product: Product): void => {
    this.dialog.open(ProductDescriptionComponent, {
      disableClose: false,
      data: product
    });
  }

  private dispatchLoadingState() {
    this.loading$ = this.productStore.pipe(select(selectLoadingState));
    this.loading$
      .subscribe(loadingState => {
        this.loadingState = loadingState;
      });
  }

  private dispatchProductsFromState(): void {
    this.products$ = this.productStore.pipe(select(selectProducts));

    this.products$.subscribe(products => {
      this.products = products;
      this.productsSlice = this.products.slice(0, this.pageIndex);
    });
  }
}
