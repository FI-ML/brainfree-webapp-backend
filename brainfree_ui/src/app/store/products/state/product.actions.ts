import {createAction, props} from '@ngrx/store';

import {Product} from '../../../models/product';
import {HttpErrorResponse} from "@angular/common/http";

export const loadAll = createAction(
  '[Product/API] Load Products',
);

export const loadAllSuccess = createAction(
  '[Product/API] Load Product Success',
  props<{ products: Product[] }>()
);

export const loadAllFailure = createAction(
  '[Product/API] Load Product Failure',
  props<{ error: HttpErrorResponse }>()
);


export const addProduct = createAction(
  '[Product/API] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product/API] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product/API] Add Product Failure',
  props<{ error: HttpErrorResponse }>()
);


export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product/API] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product/API] Update Product Failure',
  props<{ error: HttpErrorResponse }>()
);

export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ code: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product/API] Delete Product Success',
  props<{ code: string }>()
);

export const deleteProductFailure = createAction(
  '[Product/API] Delete Product Failure',
  props<{ code: string }>()
);
