import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {HttpErrorInterceptor} from "./interceptors/HttpErrorInterceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {UsersModule} from "./store/users/users.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {ProductModule} from "./store/products/product.module";
import {ProductUserComponent} from './components/content/products/product-user/product-user.component';
import {ProductsComponent} from './components/content/products/products.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingBigSizeComponent} from './components/content/loadingstate/loading-big-size/loading-big-size.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ProductManagerComponent} from './components/content/products/manage-product/product-manager.component';
import {
  ProductDescriptionComponent
} from './components/content/products/product-description/product-description.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTableModule} from "@angular/material/table";
import {CdkTableModule} from "@angular/cdk/table";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatSelectModule} from "@angular/material/select";
import {AppStoreModule} from "./app-store.module";
import {CartModule} from "./store/carts/cart.module";
import {LoadingMinSizeComponent} from './components/content/loadingstate/loading-min-size/loading-min-size.component';
import {
  ShoppingCartHeaderComponent
} from './components/content/carts/shopping-cart/shopping-cart-header/shopping-cart-header.component';
import {
  ShoppingCartContentComponent
} from './components/content/carts/shopping-cart/shopping-cart-content/shopping-cart-content.component';
import {
  ShoppingCartFooterComponent
} from './components/content/carts/shopping-cart/shopping-cart-footer/shopping-cart-footer.component';
import {CartEmptyComponent} from './components/content/carts/shopping-cart/cart-empty/cart-empty.component';
import {ShoppingCartComponent} from './components/content/carts/shopping-cart/shopping-cart.component';
import {
  ShoppingCartItemComponent
} from './components/content/carts/shopping-cart/shopping-cart-content/shopping-cart-item/shopping-cart-item.component';
import { InfoComponent } from './components/content/info/info.component';


export function keyclaokInitializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init(environment.keycloakOptions);
        console.log('Keycloak is initialized');
        // @ts-ignore
        resolve();
      } catch (error) {
        console.log('Error thrown in init ' + error);
        reject(error);
      }
    });
  };
}


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductUserComponent,
    ProductsComponent,
    LoadingBigSizeComponent,
    ProductManagerComponent,
    ProductDescriptionComponent,
    LoadingMinSizeComponent,
    ShoppingCartHeaderComponent,
    ShoppingCartContentComponent,
    ShoppingCartFooterComponent,
    CartEmptyComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    InfoComponent,
  ],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    CartModule,
    CdkTableModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    LayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    ProductModule,
    ReactiveFormsModule,
    ScrollingModule,
    UsersModule,
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: keyclaokInitializer, multi: true, deps: [KeycloakService]},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
