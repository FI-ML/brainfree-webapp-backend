import {Injectable} from '@angular/core';
import {ProductBackendService} from "./backend/product-backend.service";
import {Observable} from "rxjs";
import {Product} from "../../models/product";
import {tap} from "rxjs/operators";
import {PRODUCT_MESSAGES} from "../../enums/product_messages";
import {HttpErrorResponse} from "@angular/common/http";
import {SnackbarService} from "../snackbar/snackbar.service";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  duration = 5000;

  constructor(private readonly backendService: ProductBackendService,
              private readonly snackbarService: SnackbarService) {
  }

  //TODO: STRING CONCAT
  getProducts = (): Observable<Product[]> => {
    return this.backendService.getProducts().pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(PRODUCT_MESSAGES.LOAD_PRODUCT_SUCCESS, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(PRODUCT_MESSAGES.CANT_LOAD_PRODUCTS + ' ' + err.message)
      })
    );
  }

  getProductByCode = (articleNumber: string): Observable<Product[]> => {
    let message = PRODUCT_MESSAGES.LOAD_PRODUCT_BY_ARTICLE_NUMBER;

    return this.backendService.getProductByCode(articleNumber).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(message
          + articleNumber
          + PRODUCT_MESSAGES.LOAD_PRODUCT_BY_ARTICLE_NUMBER_SUCCESS, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(message
          + articleNumber
          + PRODUCT_MESSAGES.LOAD_PRODUCT_BY_ARTICLE_NUMBER_ERROR);
      })
    );
  }

  createProduct = (product: Product): Observable<Product> => {
    return this.backendService.createProduct(product).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(PRODUCT_MESSAGES.CREATE_PRODUCT_SUCCESS, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(PRODUCT_MESSAGES.CREATE_PRODUCT_ERROR + ' ' + err.message)
      })
    );
  }

  updateProduct = (product: Product): Observable<Product> => {
    return this.backendService.updateProduct(product).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(PRODUCT_MESSAGES.UPDATE_PRODUCT_SUCCESS, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(PRODUCT_MESSAGES.UPDATE_PRODUCT_ERROR + ' ' + err.message)
      })
    );
  }
}
