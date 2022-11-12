export enum CART_MESSAGES {

  LOAD_SHOPPING_CART_SUCCESS_BUT_IS_EMPTY = 'your shopping cart is empty',
  LOAD_SHOPPING_CART_ERROR = 'Sorry, there was a problem loading the your shopping carts, ' +
    'please contact the support and give the error message and click ok. \n  ERROR-MESSAGE: ',

  LOAD_CARTS_SUCCESS = 'Carts was found',
  LOAD_CARTS_ERROR = 'Carts can`t found \n ERROR-MESSAGE: ',

  CREATE_CART_SUCCESS = 'cart was created',
  CREATE_CART_ERROR = 'cart can`t create \n ERROR-MESSAGE: ',

  UPDATE_CART_SUCCESS = 'cart was updated',
  UPDATE_CART_ERROR = 'cart can`t update \n ERROR-MESSAGE: ',

  UPDATE_QUANTITY = 'update quantity is successfully',
  UPDATE_QUANTITY_ERROR = 'cant update quantity \n  ERROR-MESSAGE: ',

  DELETE_ITEM_FROM_CART = 'remove product from cart is successfully',
  DELETE_ITEM_FROM_CART_ERROR = 'cant delete product from cart \n  ERROR-MESSAGE: ',

  ADD_ITEM_TO_SHOPPING_CART = 'add product to cart is successfully ',
  ADD_ITEM_TO_SHOPPING_CART_ERROR = 'cant add product to cart \n  ERROR-MESSAGE: ',
}
