import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./state/user.effects";
import {environment} from "../../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {name, reducer} from "./state/user.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(name, reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule {
}
