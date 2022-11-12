import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Cart} from "../../../../../models/cart";
import {selectShoppingCart} from "../../../../../store/carts/state/carts.reducer";
import {CartItem} from "../../../../../models/cartItem/cart-item";
import {UpdateCartItemQuantity} from "../../../../../models/cartItem/update-cart-item-quantity";

@Component({
  selector: 'app-shopping-cart-content',
  templateUrl: './shopping-cart-content.component.html',
  styleUrls: ['./shopping-cart-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingCartContentComponent implements OnInit {
  items!: Array<CartItem>;

  @Output() deleteItem = new EventEmitter<string>();
  @Output() updateQuantity = new EventEmitter<UpdateCartItemQuantity>();

  constructor(private readonly cartStore: Store<Cart>) {
  }

  ngOnInit(): void {
    this.setShoppingCart();
  }

  setShoppingCart(): void {
    this.cartStore.pipe(select(selectShoppingCart)).subscribe(shoppingCart => {
      this.items = shoppingCart.items;
    });
  }

  setQuantity($event: UpdateCartItemQuantity) {
    this.updateQuantity.emit($event);
  }

  removeItem($event: string) {
    this.deleteItem.emit($event);
  }
}
