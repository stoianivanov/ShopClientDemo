import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productId: number;
  @Input() productName: string;
  @Input() productPrice: string;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteProduct() {
    this.deleteEvent.emit(this.productId);
  }
}
