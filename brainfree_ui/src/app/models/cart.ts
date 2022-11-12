import {CartItem} from "./cartItem/cart-item";

export interface Cart {
  id: string;
  name: string;
  priceSum: number;
  items: Array<CartItem>,
}

export const selectId = (entity: Cart) => entity.id;
