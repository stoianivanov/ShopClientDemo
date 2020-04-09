import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {};
  productName: string;
  productPrice: number;
  @Output() addProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  add() {
    console.log(this.product);
    this.addProduct.emit(this.product);
  }

}
