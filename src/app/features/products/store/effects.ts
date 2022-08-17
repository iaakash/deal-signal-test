import { IProductResponse } from './../model/product.model';
import { ProductsService } from '../products.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ProductsActions from './actions';
import {mapProductsResponseToProducts} from  '../helpers/product.serialiser';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
   private productsService: ProductsService
  ) {}
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductsActions.getProducts),
    mergeMap(() => this.productsService.fetchAllProducts()
      .pipe(
        map((products:IProductResponse[]) => ProductsActions.getProductsSuccess({products: products.length ? mapProductsResponseToProducts(products) : []})),
        catchError((error) => of(ProductsActions.getProductsFail({error})))
      ))
    )
  );


}
