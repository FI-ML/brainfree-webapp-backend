import {Component, OnInit} from '@angular/core';
import {LOADING_TITLES} from "../../../../enums/loading_titles";
import {Cart} from "../../../../models/cart";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectLoadingState} from "../../../../store/users/state/user.reducer";
import {selectShoppingCart} from "../../../../store/carts/state/carts.reducer";
import {UpdateCartItemQuantity} from "../../../../models/cartItem/update-cart-item-quantity";
import {removeItemFromCart, updateQuantity} from "../../../../store/carts/state/carts.actions";
import {RemoveCartItem} from "../../../../models/cartItem/remove-cart-item";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart$!: Observable<Cart>;
  loading$!: Observable<boolean>;

  shoppingCart!: Cart;
  loadingState = true;

  name = LOADING_TITLES.SHOPPING_CART;


  constructor(private readonly cartStore: Store<Cart>) {
  }

  ngOnInit(): void {
    this.setShoppingCart();
  }

  private setShoppingCart(): void {

    this.loading$ = this.cartStore.pipe(select(selectLoadingState));
    this.loading$.subscribe(loadingState => {
      this.loadingState = loadingState;
    });

    this.shoppingCart$ = this.cartStore.pipe(select(selectShoppingCart));
    this.shoppingCart$.subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
    })
  }

  updateQuantity(updateItemQuantity: UpdateCartItemQuantity) {
    this.cartStore.dispatch(updateQuantity(({updateCartItemQuantity: updateItemQuantity})));
    this.shoppingCart$ = this.cartStore.pipe(select(selectShoppingCart));
    this.shoppingCart$.subscribe(cart => {
      this.shoppingCart = cart;
    });
  }

  removeItem(itemId: string) {
    let removeCartItem: RemoveCartItem = {
      cart: this.shoppingCart,
      itemId: itemId
    }
    this.cartStore.dispatch(removeItemFromCart(({removeCartItem: removeCartItem})));
    this.shoppingCart$ = this.cartStore.pipe(select(selectShoppingCart));

    this.shoppingCart$.subscribe(cart => {
      this.shoppingCart = cart;
    });
  }
}
