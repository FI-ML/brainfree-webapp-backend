import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Cart} from "../../models/cart";
import {Store} from "@ngrx/store";
import {CartItem} from "../../models/cartItem/cart-item";
import {CartService} from "./cart.service";
import {tap} from "rxjs/operators";
import {AddCartItem} from "../../models/cartItem/add-cart-item";
import {UpdateCartItemQuantity} from "../../models/cartItem/update-cart-item-quantity";
import {RemoveCartItem} from "../../models/cartItem/remove-cart-item";


@Injectable({
  providedIn: 'root'
})
export class ManageCartItemsService {
  cart!: Cart;

  constructor(private readonly cartStore: Store<Cart>,
              private readonly cartService: CartService) {
  }


  addItemToCart(addCartItem: AddCartItem): Observable<Cart> {
    return this.cartService.addItemToCart(addCartItem).pipe(
      tap((cart) => {
        cart.items = this.sortCartItems(cart.items);
      }));
  }


  updateQuantity(updateCartItemQuantity: UpdateCartItemQuantity): Observable<Cart> {
    return this.cartService.updateQuantity(updateCartItemQuantity).pipe(
      tap((cart) => {
        cart.items = this.sortCartItems(cart.items);
      }));
  }


  public removeItemFromCart(removeCartItem: RemoveCartItem): Observable<Cart> {
    this.cart = removeCartItem.cart;

    let items: CartItem[] = this.cart.items.filter(item => item.id != removeCartItem.itemId);
    let cart = this.updateCartItemsAndGetCart(items);
    this.cartService.removeItemFromCart(removeCartItem.itemId).subscribe();

    return of(cart).pipe(
      tap((cart) => {
        cart.items = this.sortCartItems(cart.items);
      }));
  }

  public sortCartItems(items: Array<CartItem>): Array<CartItem> {
    return Array.from(items)
      .sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  }

  private updateCartItemsAndGetCart(items: CartItem[]): Cart {
    return {
      id: this.cart.id,
      name: this.cart.name,
      items: items,
      priceSum: items.reduce((sum, item) => sum + item.price, 0)
    };
  }
}
