import { IProduct } from '../../model/product.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ProductsActions from '../../store/actions';
import * as ProductsSelectors from '../../store/selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  public products$: Observable<IProduct[]>;
  constructor(
    private _store: Store
    ) { }

  ngOnInit(): void {
    this._store.dispatch(ProductsActions.getProducts());
    this.products$ = this._store.pipe(select(ProductsSelectors.selectProductList));
  }


  public addToCart(id: number) {

    this._store.dispatch(ProductsActions.addProductToCart({id}));
  }

}
