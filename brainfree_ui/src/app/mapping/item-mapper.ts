import {CartItem} from "../models/cartItem/cart-item";
import {Product} from "../models/product";

export class ItemMapper {

  private static item: CartItem = {
    id: '',
    name: '',
    description: '',
    articleNumber: '',
    price: 0,
    priceAccording: '',
    quantity: 0
  };

  public static productToItem(product: Product): CartItem {
    if (product) {
      let item: CartItem = {
        id: '',
        name: product.name,
        description: product.description,
        articleNumber: product.articleNumber,
        price: product.price,
        priceAccording: product.priceAccording,
        quantity: 1
      }
      return item;
    }

    return this.item;
  }

}
