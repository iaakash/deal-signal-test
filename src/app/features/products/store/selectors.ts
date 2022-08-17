import { IProduct } from '../model/product.model';
import { IProductsState } from './reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  products: IProductsState;
}

export const selectProductsFeature = (state: AppState) => state.products;

export const selectProductList = createSelector(
  selectProductsFeature,
  (state: IProductsState) => state.productList
);

export const selectProductsInCart = createSelector(
  selectProductsFeature,
  (state: IProductsState) => state.cart.map(item => {
      const productInCart = state.productList.find(product => product.id === item.id);
      return {
        ...productInCart,
        ...item
      };
    }
    )
);

export const selectTotalOfProductsInCart = createSelector(
  selectProductsFeature,
  (state: IProductsState) => state.cart.length
);


export const selectCartTotal = createSelector(
  selectProductsInCart,
  (products): number => {
    const result =  products.reduce((acc, curr) => acc + curr.price*curr.quantity, 0);
    return result;
  }
);

export const selectProductsLoading = createSelector(
  selectProductsFeature,
  (state: IProductsState) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsFeature,
  (state: IProductsState) => state.error
);
