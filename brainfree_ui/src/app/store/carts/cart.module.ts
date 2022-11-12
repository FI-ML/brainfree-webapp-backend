import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {CartsEffects} from './state/carts.effects';
import {StoreModule} from "@ngrx/store";
import {name, reducer} from './state/carts.reducer';
import {environment} from "../../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  imports: [
    CommonModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(name, reducer),
    EffectsModule.forFeature([CartsEffects])
  ]
})
export class CartModule {
}
