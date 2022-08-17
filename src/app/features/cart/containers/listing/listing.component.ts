import { Store, select } from '@ngrx/store';
import { IProduct } from '../../../products/model/product.model';
import { Observable, tap } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromProductsSelectors from '../../../products/store/selectors';
import * as fromProductsActions from '../../../products/store/actions';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent implements OnInit {
  public productsInCart$: Observable<IProduct[]>;
  public cartTotal$: Observable<number>;
  constructor(private _store: Store) {}

  public ngOnInit(): void {
    this.productsInCart$ = this._store.pipe(
      select(fromProductsSelectors.selectProductsInCart)
    );
    this.cartTotal$ = this._store.pipe(
      select(fromProductsSelectors.selectCartTotal)
    );
  }

  public removeFromCart(id: number) {
    this._store.dispatch(fromProductsActions.removeProductFromCart({ id }));
  }
}
