import {NgModule} from '@angular/core';
import {routerReducer, RouterReducerState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {ActionReducer, ActionReducerMap, MetaReducer, StoreModule} from "@ngrx/store";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";

interface State {
  router: RouterReducerState;
}

const logger =
  (reducer: ActionReducer<State>): ActionReducer<State> =>
    (state, action) => {
      const result = reducer(state, action);
      console.groupCollapsed(action.type);
      console.log('prev state', state);
      console.log('action', action);
      console.log('next state', result);
      console.groupEnd();

      return result;
    };

const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    EffectsModule.forRoot([]),
  ],
})
export class AppStoreModule {
}
