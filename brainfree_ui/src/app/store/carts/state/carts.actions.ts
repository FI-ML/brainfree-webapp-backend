import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from "@angular/common/http";
import {Cart} from "../../../models/cart";
import {RemoveCartItem} from "../../../models/cartItem/remove-cart-item";
import {AddCartItem} from "../../../models/cartItem/add-cart-item";
import {UpdateCartItemQuantity} from "../../../models/cartItem/update-cart-item-quantity";

export const loadAll = createAction(
  '[Cart/API] Load Carts'
);

export const loadAllSuccess = createAction(
  '[Cart/API] Load Carts Success',
  props<{ carts: Cart[] }>()
);

export const loadAllFailure = createAction(
  '[Cart/API] Load Carts Failure',
  props<{ error: HttpErrorResponse }>()
);

export const addItemToCart = createAction(
  '[Cart/API] Add Item to Cart',
  props<{ addCartItem: AddCartItem }>()
);

export const addItemToCartSuccess = createAction(
  '[Cart/API] Add Item to Cart Success',
  props<{ cart: Cart }>()
);

export const addItemToCartFailure = createAction(
  '[Cart/API] Add Item to Cart Failure',
  props<{ error: HttpErrorResponse }>()
);

export const updateQuantity = createAction(
  '[Cart/API] Update Cart',
  props<{ updateCartItemQuantity: UpdateCartItemQuantity }>()
);

export const updateQuantitySuccess = createAction(
  '[Cart/API] Update Cart Success',
  props<{ cart: Cart }>()
);

export const updateQuantityFailure = createAction(
  '[Cart/API] Update Cart Failure',
  props<{ error: HttpErrorResponse }>()
);

export const removeItemFromCart = createAction(
  '[Cart/API] Delete Item from Cart',
  props<{ removeCartItem: RemoveCartItem }>()
);

export const removeItemFromCartSuccess = createAction(
  '[Cart/API] Delete Item from Cart Success',
  props<{ cart: Cart }>()
);

export const removeItemFromCartFailure = createAction(
  '[Cart/API] Delete Item from Cart Failure',
  props<{ error: HttpErrorResponse }>()
);
