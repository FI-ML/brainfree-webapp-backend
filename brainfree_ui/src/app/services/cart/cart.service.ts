import {Injectable} from '@angular/core';
import {CartBackendService} from "./backend/cart-backend.service";
import {Observable} from "rxjs";
import {Cart} from "../../models/cart";
import {tap} from "rxjs/operators";
import {SnackbarService} from "../snackbar/snackbar.service";
import {CART_MESSAGES} from "../../enums/cart_messages";
import {HttpErrorResponse} from "@angular/common/http";
import {AddCartItem} from "../../models/cartItem/add-cart-item";
import {UpdateCartItemQuantity} from "../../models/cartItem/update-cart-item-quantity";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  duration = 5000;

  constructor(private readonly shoppingCartBackendService: CartBackendService,
              private readonly snackbarService: SnackbarService) {
  }

  getShoppingCart = (): Observable<Cart> => {
    return this.shoppingCartBackendService.getShoppingCart().pipe(
      tap((cart) => {
        if (cart.items.length === 0) {
          this.snackbarService.openSuccessSnackBar(CART_MESSAGES.LOAD_SHOPPING_CART_SUCCESS_BUT_IS_EMPTY
            , this.duration);
        }
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(CART_MESSAGES.LOAD_SHOPPING_CART_ERROR + err.message);
      })
    );
  }

  findAll = (): Observable<Cart[]> => {
    return this.shoppingCartBackendService.getCarts().pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(CART_MESSAGES.LOAD_CARTS_SUCCESS, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(CART_MESSAGES.LOAD_SHOPPING_CART_ERROR + err.message);
      })
    );
  }

  createCart = (cart: Cart): Observable<Cart> => {
    return this.shoppingCartBackendService.createCart(cart).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(CART_MESSAGES.CREATE_CART_SUCCESS, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(CART_MESSAGES.CREATE_CART_ERROR + err.message);
      })
    );
  }

  updateCart(cart: Cart): Observable<Cart> {
    return this.shoppingCartBackendService.updateCart(cart).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(CART_MESSAGES.UPDATE_CART_SUCCESS, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(CART_MESSAGES.UPDATE_CART_ERROR + err.message);
      })
    );
  }

  deleteCart = (cartName: string): Observable<Cart> => {
    return this.shoppingCartBackendService.deleteCart(cartName).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(CART_MESSAGES.UPDATE_CART_SUCCESS, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(CART_MESSAGES.UPDATE_CART_ERROR + err.message);
      })
    );
  }

  addItemToCart = (addCartItem: AddCartItem): Observable<Cart> => {
    return this.shoppingCartBackendService.addItemToCart(addCartItem).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(CART_MESSAGES.ADD_ITEM_TO_SHOPPING_CART, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(CART_MESSAGES.ADD_ITEM_TO_SHOPPING_CART_ERROR + err.message);
      })
    )
  }

  updateQuantity = (updateCartItemQuantity: UpdateCartItemQuantity): Observable<Cart> => {
    return this.shoppingCartBackendService.updateQuantity(updateCartItemQuantity).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(CART_MESSAGES.UPDATE_QUANTITY, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(CART_MESSAGES.UPDATE_QUANTITY_ERROR + err.message);
      })
    );
  }

  removeItemFromCart = (itemId: string): Observable<string> => {
    return this.shoppingCartBackendService.removeItemFromCart(itemId).pipe(
      tap(() => {
        this.snackbarService.openSuccessSnackBar(CART_MESSAGES.DELETE_ITEM_FROM_CART, this.duration);
      }, (err: HttpErrorResponse) => {
        this.snackbarService.openErrorSnackBar(CART_MESSAGES.DELETE_ITEM_FROM_CART_ERROR + err.message);
      })
    );
  }
}
