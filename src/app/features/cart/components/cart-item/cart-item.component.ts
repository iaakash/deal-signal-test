import { IProduct } from './../../../products/model/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: IProduct;
  @Output() remove = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onRemoveItem(id: number) {
    this.remove.emit(id);
  }
}
