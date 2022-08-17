import { IProduct } from './../../model/product.model';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  @Output() add = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public addToCart(id: number) {
    this.add.emit(id);
  }

  public removeFromCart(id: number) {
    this.remove.emit(id);
  }
}
