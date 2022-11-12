import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./components/content/products/products.component";
import {ShoppingCartComponent} from "./components/content/carts/shopping-cart/shopping-cart.component";
import {InfoComponent} from "./components/content/info/info.component";


const routes: Routes = [
  {
    path: '', redirectTo: '/products', pathMatch: 'full'
  },
  {
    path: 'info', component: InfoComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
