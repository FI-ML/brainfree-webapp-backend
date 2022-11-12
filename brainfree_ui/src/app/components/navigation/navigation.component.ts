import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user.model";

import {select, Store} from "@ngrx/store";
import {loadUser} from "../../store/users/state/user.actions";
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {KeycloakService} from "keycloak-angular";
import {Cart} from "../../models/cart";
import {Observable} from "rxjs";
import {selectCarts, selectShoppingCartItemCounter} from "../../store/carts/state/carts.reducer";
import * as CartsActions from '../../store/carts/state/carts.actions';
import {selectUser} from "../../store/users/state/user.reducer";
import {Router} from "@angular/router";
import {Product} from "../../models/product";
import {loadAll} from "../../store/products/state/product.actions";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav

  maxWidth = '(max-width:800px)';

  user!: User;
  carts!: Cart[];
  loadingState!: boolean;

  user$!: Observable<User>;
  counter !: number;

  constructor
  (
    private readonly observer: BreakpointObserver,
    private readonly keycloakService: KeycloakService,
    private readonly userStore: Store<User>,
    private readonly cartStore: Store<Cart>,
    private readonly productStore: Store<Product>,
    private readonly router: Router,
  ) {
    this.counter = 0;
  }

  ngOnInit(): void {
    this.initUser();
    this.initProducts();
    this.initCart();
    this.updateCounter();
  }

  ngAfterViewInit() {
    this.observer.observe([this.maxWidth]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }


  openUserKeycloakAccount() {
    const route = "http://localhost:8080/auth/realms/brainfree/account/"
    this.openRoute(route);
  }

  logout() {
    this.keycloakService.logout();
  }

  openRoute(route: string) {
    this.router.navigateByUrl(`${route}`);
  }

  updateCounter(): void {
    this.cartStore.pipe(select(selectShoppingCartItemCounter)).subscribe(counter => {
      this.counter = counter;
    });
  }

  getFullName = (): string => {

    let firstName = '';
    let lastName = '';

    this.user$.subscribe(user => {
      firstName = user.firstName;
      lastName = user.lastName;
    });
    return firstName + ' ' + lastName;
  }

  private initUser(): void {
    this.user$ = this.userStore.pipe(select(selectUser));
    this.userStore.dispatch(loadUser());

    this.loadingState = true;

    this.user$.subscribe(user => {
      this.user = user;
      this.loadingState = false;
    }, () => {
      this.loadingState = false;
    });

  }

  private initProducts(): void {
    this.productStore.dispatch(loadAll());
  }

  private initCart(): void {
    this.cartStore.dispatch(CartsActions.loadAll());
    this.cartStore.pipe(select(selectCarts));
  }

}
