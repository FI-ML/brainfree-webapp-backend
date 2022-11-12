export interface CartItem {

  id: string;

  name: string;

  description: string;

  articleNumber: string;

  priceAccording: string;

  price: number;

  quantity: number;

}

export const selectId = (entity: CartItem) => entity.articleNumber;
