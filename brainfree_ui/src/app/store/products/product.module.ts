import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffects} from './state/product.effects';
import {name, reducer} from './state/product.reducer';
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(name, reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule {
}
