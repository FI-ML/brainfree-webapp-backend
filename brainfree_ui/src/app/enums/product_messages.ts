export enum PRODUCT_MESSAGES {
  LOAD_PRODUCT_SUCCESS = 'load product is successfully',
  CANT_LOAD_PRODUCTS = 'Sorry, there was a problem loading the products,' +
    'please contact the support and give the error message and click ok \n  ERROR-MESSAGE: ',

  LOAD_PRODUCT_BY_ARTICLE_NUMBER = 'product with article number: ',
  LOAD_PRODUCT_BY_ARTICLE_NUMBER_SUCCESS = ' was found',
  LOAD_PRODUCT_BY_ARTICLE_NUMBER_ERROR = ' can`t found \n  ERROR-MESSAGE: ',

  CREATE_PRODUCT_SUCCESS = 'create product is successfully',
  CREATE_PRODUCT_ERROR = 'cant create product \n  ERROR-MESSAGE: ',


  UPDATE_PRODUCT_SUCCESS = 'update product is successfully',
  UPDATE_PRODUCT_ERROR = 'cant update product \n  ERROR-MESSAGE: ',

  DELETE_PRODUCT_SUCCESS = 'delete product is successfully',
  DELETE_PRODUCT_ERROR = 'cant delete product \n  ERROR-MESSAGE: '
}
