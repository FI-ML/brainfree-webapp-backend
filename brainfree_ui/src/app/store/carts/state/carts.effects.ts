import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as CartsActions from './carts.actions';
import {catchError, concatMap, map, switchMap} from "rxjs/operators";
import {ManageCartItemsService} from "../../../services/cart/manage-cart-items.service";
import {of} from "rxjs";
import {CartService} from "../../../services/cart/cart.service";

@Injectable()
export class CartsEffects {


  loadCarts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartsActions.loadAll),
      switchMap(() => this.cartService.findAll().pipe(
        map((carts) => CartsActions.loadAllSuccess({carts: carts})),
        catchError((error) => of(CartsActions.loadAllFailure({error}))))
      )
    );
  });

  addItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartsActions.addItemToCart),
      concatMap(({addCartItem}) =>
        this.manageCartItemsService.addItemToCart(addCartItem).pipe(
          map(result => CartsActions.addItemToCartSuccess({cart: result})),
          catchError(error => of(CartsActions.addItemToCartFailure({error}))))
      )
    )
  );

  deleteItemFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartsActions.removeItemFromCart),
      concatMap(({removeCartItem}) =>
        this.manageCartItemsService.removeItemFromCart(removeCartItem)
          .pipe(
            map(result => CartsActions.removeItemFromCartSuccess({cart: result})),
            catchError(error => of(CartsActions.removeItemFromCartFailure({error}))))
      )
    )
  );

  updateQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartsActions.updateQuantity),
      concatMap(({updateCartItemQuantity}) =>
        this.manageCartItemsService.updateQuantity(updateCartItemQuantity).pipe(
          map(result => CartsActions.updateQuantitySuccess({cart: result})),
          catchError(error => of(CartsActions.updateQuantityFailure({error}))))
      )
    )
  );

  constructor(private readonly actions$: Actions,
              private readonly manageCartItemsService: ManageCartItemsService,
              private readonly cartService: CartService) {
  }

}
