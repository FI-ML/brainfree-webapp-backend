import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Cart} from "../../../../../models/cart";
import {selectShoppingCart} from "../../../../../store/carts/state/carts.reducer";

@Component({
  selector: 'app-shopping-cart-footer',
  templateUrl: './shopping-cart-footer.component.html',
  styleUrls: ['./shopping-cart-footer.component.scss']
})
export class ShoppingCartFooterComponent implements OnInit {

  price!: string;

  constructor(private readonly cartStore: Store<Cart>) {
  }

  ngOnInit(): void {
    this.setPrice();
  }

  private setPrice(): void {
    this.cartStore.pipe(select(selectShoppingCart)).subscribe(shoppingCart => {
      this.price = shoppingCart.priceSum.toFixed(2) + ' €';
    });
  }
}
