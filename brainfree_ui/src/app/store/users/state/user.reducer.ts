import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {selectId, User} from '../../../models/user.model';
import * as UserActions from './user.actions';


export interface UserState extends EntityState<User> {
  error: unknown | null;
  loadingState: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectId
});

export const initialState: UserState = adapter.getInitialState({
  error: null,
  loadingState: false,
});

export const {name, reducer, selectUserState: selectUserState, selectLoadingState, selectError} =
  createFeature({
    name: 'user',
    reducer: createReducer(
      initialState,
      on(UserActions.loadUser, state => {
        return {
          ...state, loadingState: true
        };
      }),

      on(UserActions.loadUserSuccess, (state, {user}) =>
        adapter.setOne(user, {...state, loadingState: false})
      ),

      on(UserActions.loadUserFailure, (state, {error}) => ({
        ...state,
        loadingState: false,
        error,
      })),
    )
  });

export const {selectAll: userSelector} = adapter.getSelectors(selectUserState);

export const selectUser = createSelector(userSelector, (entities: User[]) => {
  return entities[0];
});
