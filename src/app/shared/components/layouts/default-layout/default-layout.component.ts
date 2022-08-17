import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromProductsSelectors from '../../../../features/products/store/selectors';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent implements OnInit {
  public totalCountOfProducts$: Observable<number>;

  constructor(private _router: Router, private _store: Store) {}

  ngOnInit(): void {
    this.totalCountOfProducts$ = this._store.pipe(select(fromProductsSelectors.selectTotalOfProductsInCart));
  }

  public goToCart(): void {
    this._router.navigate(['/cart']);
  }
}
