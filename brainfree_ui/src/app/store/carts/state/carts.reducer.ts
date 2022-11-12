import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Cart, selectId} from "../../../models/cart";
import * as CartActions from './carts.actions';

export interface CartState extends EntityState<Cart> {
  error: unknown | null;
  loadingState: boolean;
}

export const adapter: EntityAdapter<Cart> = createEntityAdapter<Cart>({
  selectId: selectId
});


export const initialState: CartState = adapter.getInitialState({
  error: null,
  loadingState: false,
});


export const {name, reducer, selectCartsState: selectCartsState, selectLoadingState, selectError} =
  createFeature({
    name: 'carts',
    reducer: createReducer(
      initialState,

      on(CartActions.loadAll, (state) => ({...state, loadingState: true})),

      on(CartActions.loadAllSuccess, (state, {carts}) =>
        adapter.setAll(carts, {...state, loadingState: false})
      ),

      on(CartActions.loadAllFailure, (state, {error}) => ({
        ...state,
        loadingState: false,
        error,
      })),

      on(CartActions.addItemToCart, (state) => ({...state, loadingState: true})),

      on(CartActions.addItemToCartSuccess, (state, {cart}) =>
        adapter.upsertOne(cart, {...state, loadingState: false}
        )
      ),

      on(CartActions.addItemToCartFailure, (state, {error}) => ({
        ...state,
        loadingState: false,
        error,
      })),

      on(CartActions.removeItemFromCart, (state) => ({...state, loadingState: true})),

      on(CartActions.removeItemFromCartSuccess, (state, {cart}) =>
        adapter.upsertOne(cart, {...state, loadingState: false})
      ),

      on(CartActions.removeItemFromCartFailure, (state, {error}) => ({
        ...state,
        loadingState: false,
        error,
      })),

      on(CartActions.updateQuantity, (state) => ({...state, loadingState: true})),

      on(CartActions.updateQuantitySuccess, (state, {cart}) =>
        adapter.updateOne(
          {id: cart.id, changes: cart},
          {...state, loadingState: false}
        )
      ),

      on(CartActions.updateQuantityFailure, (state, {error}) => ({
        ...state,
        loadingState: false,
        error,
      })),
    )
  });

export const {selectAll: selectCarts} = adapter.getSelectors(selectCartsState);

export const selectShoppingCart = createSelector(
  selectCarts, (entities: Cart[]) => {
    return entities.filter(cart => cart.name.toLowerCase() === 'shopping-cart')[0];
  });

export const selectCartByID = (id: string) => createSelector(
  selectCarts, (entities: Cart[]) => {
    return entities.filter(x => x.id == id)[0];
  });

export const selectShoppingCartItemCounter = createSelector(
  selectCarts, (entities: Cart[]) => {
    return entities
      .filter(cart => cart.name.toLowerCase() === 'shopping-cart')[0]?.items
      .reduce((sum, item) => sum + item.quantity, 0);
  });


