import {Injectable} from '@angular/core';
import {AppSettings} from "../../../app-settings";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cart} from "../../../models/cart";
import {AddCartItem} from "../../../models/cartItem/add-cart-item";
import {UpdateCartItemQuantity} from "../../../models/cartItem/update-cart-item-quantity";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartBackendService {

  url = `${AppSettings.URL}carts`;


  constructor(private http: HttpClient) {
  }

  getShoppingCart = (): Observable<Cart> => {
    const url = `${this.url}/shopping-cart`;
    return this.http.get<Cart>(url);
  }

  getCarts = (): Observable<Cart[]> => {
    const url = `${this.url}/`;
    return this.http.get<Cart[]>(url);
  }

  createCart = (cart: Cart): Observable<Cart> => {
    const url = `${this.url}/create`;
    return this.http.post<Cart>(url, cart);
  }

  updateCart(cart: Cart): Observable<Cart> {
    const url = `${this.url}/edit`;
    return this.http.put<Cart>(url, cart);
  }

  deleteCart = (cartName: string): Observable<Cart> => {
    const url = `${this.url}${cartName}`;
    return this.http.delete<Cart>(url);
  }

  addItemToCart = (addCartItem: AddCartItem): Observable<Cart> => {
    const url = `${this.url}/add-item`;
    return this.http.put<Cart>(url, addCartItem);
  }

  updateQuantity = (updateCartItemQuantity: UpdateCartItemQuantity): Observable<Cart> => {
    const url = `${this.url}/update-quantity`;
    return this.http.put<Cart>(url, updateCartItemQuantity);

  }

  removeItemFromCart = (itemId: string): Observable<string> => {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const url = `${this.url}/delete-item/${itemId}`;
    return this.http.delete<string>(url, {headers: headers}).pipe(map(() => itemId));
  }

}
