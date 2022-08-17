import { IProduct } from '../model/product.model';
import { createAction, props } from '@ngrx/store';

export const getProducts = createAction(
  '[Products page] fetch all products'
);

export const getProductsSuccess = createAction(
  '[Products page] fetch all products success',
  props<{ products: IProduct[] }>()
);


export const getProductsFail = createAction(
  '[Products page] fetch all products fail',
  props<{ error: string }>()
);

export const addProductToCart = createAction(
  '[Products page] Add to cart',
  props<{ id: number }>()
);

export const removeProductFromCart = createAction(
  '[Products page] Remove from Cart',
  props<{ id: number }>()
);
