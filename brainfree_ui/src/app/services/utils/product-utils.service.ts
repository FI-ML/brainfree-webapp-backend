import {select, Store} from "@ngrx/store";
import {AddCartItem} from "../../models/cartItem/add-cart-item";
import {addItemToCart} from "../../store/carts/state/carts.actions";
import {Cart} from "../../models/cart";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductUtilsService {

  constructor(private readonly cartState: Store<Cart>) {
  }

  public addProductToCart(selector: any, articleNumber: string): void {
    let cartId = '';
    this.cartState.pipe(select(selector)).subscribe(cart => {
      cartId = cart.id;
    });

    let addCartItem: AddCartItem = {
      cartId: cartId,
      articleNumber: articleNumber
    }

    this.cartState.dispatch(addItemToCart({addCartItem: addCartItem}));
  }
}
