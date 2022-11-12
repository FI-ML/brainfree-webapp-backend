import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-shopping-cart-header',
  templateUrl: './shopping-cart-header.component.html',
  styleUrls: ['./shopping-cart-header.component.scss']
})
export class ShoppingCartHeaderComponent implements OnInit, OnDestroy {

  medium = false;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.isScreenMedium();
  }

  ngOnDestroy() {
    this.breakpointObserver.ngOnDestroy();
  }

  isScreenMedium(): void {
    this.breakpointObserver.observe("(min-width:768px)").subscribe((result) => {
      this.medium = result.matches;
    })
  }
}
