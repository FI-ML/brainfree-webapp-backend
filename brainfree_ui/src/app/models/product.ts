export interface Product {
  name: string,
  readonly articleNumber: string,
  category: string,
  description: string,
  priceAccording: string,
  price: number
}

export const selectId = (entity: Product) => entity.articleNumber;
