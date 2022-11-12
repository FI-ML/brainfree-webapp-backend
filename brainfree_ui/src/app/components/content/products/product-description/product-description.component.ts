import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Product} from "../../../../models/product";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDescriptionComponent implements OnInit {
  
  product!: Product

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {
  }

  ngOnInit(): void {
    this.product = this.data;
  }

}
