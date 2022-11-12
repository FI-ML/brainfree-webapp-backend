import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UpdateCartItemQuantity} from "../../../../../../models/cartItem/update-cart-item-quantity";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CartItem} from "../../../../../../models/cartItem/cart-item";
import {Tile} from "../../../../../../services/utils/grid/tile";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss'],
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item!: CartItem;
  @Output() deleteItem = new EventEmitter<string>();
  @Output() updateQuantity = new EventEmitter<UpdateCartItemQuantity>();


  itemFormGroup!: FormGroup;

  tiles!: Tile[];

  isMediumScreen!: boolean;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.initializeQuantityFormGroup();
    this.isMd();
  }


  initializeQuantityFormGroup = (): FormGroup => {
    this.itemFormGroup = this.formBuilder.group({
      quantity: new FormControl({
        value: '',
      }, [Validators.required]),
    });
    return this.itemFormGroup;
  }

  get controlQuantity(): FormControl {
    return (<FormControl>this.itemFormGroup.get('quantity'));
  }

  getQuantitiesOption = (): Array<number> => {
    let quantities: Array<number> = [];
    for (let i = 0; i < 30; i++) {
      quantities.push(i + 1);
    }
    return quantities;
  }

  setQuantity(): void {
    let updateQuantity: UpdateCartItemQuantity = {
      itemId: this.item.id,
      quantity: Number.parseInt(this.controlQuantity.value),
    }
    this.updateQuantity.emit(updateQuantity);
  }

  deleteItemFromCart(): void {
    this.deleteItem.emit(this.item.id);
  }

  getPrice = (): string => {
    return this.item.price.toFixed(2) + ' €';
  }

  private isMd(): void {
    this.breakpointObserver.observe("(min-width: 768px)").subscribe((result) => {
      this.isMediumScreen = result.matches;
    });
  }
}
