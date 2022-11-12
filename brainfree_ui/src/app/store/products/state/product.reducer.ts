import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import {
  loadAll,
  loadAllFailure,
  loadAllSuccess,
  updateProduct,
  updateProductFailure,
  updateProductSuccess
} from './product.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Product, selectId} from "../../../models/product";


export interface ProductState extends EntityState<Product> {
  error: unknown | null;
  loadingState: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: selectId
});


export const initialState: ProductState = adapter.getInitialState({
  error: null,
  loadingState: false,
});

export const {name, reducer, selectProductsState: selectProductsState, selectLoadingState, selectError} =
  createFeature({
    name: 'products',
    reducer: createReducer(
      initialState,

      on(loadAll, (state) => ({...state, loadingState: true})),

      on(loadAllSuccess,
        (state, {products}) =>
          adapter.setAll(products, {...state, loadingState: false})
      ),

      on(loadAllFailure, (state, {error}) => ({
        ...state,
        loadingState: false,
        error,
      })),

      on(updateProduct, (state) => ({...state, loadingState: true})),

      on(updateProductSuccess, (state, {product}) =>
        adapter.updateOne({id: product.articleNumber, changes: product},
          {...state, loadingState: false}
        )
      ),

      on(updateProductFailure, (state, {error}) => ({
        ...state,
        loadingState: false,
        error,
      })),
    )
  });

export const {selectAll: selectProducts} = adapter.getSelectors(selectProductsState);

export const selectSingleProduct = (articleNumber: string) =>
  createSelector(selectProducts, (entities: Product[]): Product => {
    return entities.filter(x => x.articleNumber === articleNumber)[0];
  });
