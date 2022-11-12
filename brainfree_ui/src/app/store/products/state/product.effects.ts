import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {
  addProduct,
  addProductFailure,
  addProductSuccess,
  loadAll,
  loadAllFailure,
  loadAllSuccess,
  updateProduct,
  updateProductFailure,
  updateProductSuccess
} from './product.actions';
import {ProductService} from "../../../services/products/product.service";
import {catchError, map, mapTo, switchMap} from "rxjs/operators";
import {of} from "rxjs";


@Injectable()
export class ProductEffects {

  readonly loadProducts = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAll),
      switchMap(() => this.productService.getProducts().pipe(
        map(products => loadAllSuccess({products: products})),
        catchError(error => of(loadAllFailure({error}))))
      )
    );
  });

  readonly addProduct = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),
      switchMap(({product}) => {
        return this.productService.createProduct(product).pipe(
          mapTo(addProductSuccess({product: product})),
          catchError(() => of(addProductFailure))
        );
      }),
    ),
  );

  readonly updateProduct = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      switchMap(({product}) => {
        return this.productService.updateProduct(product).pipe(
          mapTo(updateProductSuccess({product: product})),
          catchError(() => of(updateProductFailure))
        );
      }),
    ),
  );


  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {
  }

}
