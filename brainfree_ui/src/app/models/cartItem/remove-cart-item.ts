import {Cart} from "../cart";

export interface RemoveCartItem {
  cart: Cart;
  itemId: string;
}
