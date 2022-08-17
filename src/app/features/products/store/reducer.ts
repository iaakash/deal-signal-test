import { IProduct, ICartItem } from '../model/product.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from './actions';

export interface IProductsState {
  productList: Array<IProduct>;
  cart: Array<ICartItem>;
  loading: boolean;
  error: string | null;
}

export const initialState: IProductsState = {
  productList: [],
  cart: [],
  loading: false,
  error: null,
};

export const ProductReducer = createReducer(
  initialState,
  on(ProductsActions.getProducts, (state) => ({ ...state, loading: true })),
  on(ProductsActions.getProductsSuccess, (state, action) => ({
    ...state,
    productList: action.products,
    loading: false,
  })),
  on(ProductsActions.getProductsFail, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  })),
  on(ProductsActions.addProductToCart, (state, action) => {

    let newCart = state.cart.map((item) => item);

    if (!newCart.length) {
      newCart = [{
        id: action.id,
        quantity: 1,
      },]
    }else {
      const itemIdx = newCart.findIndex((item) => item.id === action.id);
      if(itemIdx == -1) {
        newCart = [...newCart, {id: action.id, quantity: 1}];
      }else {
        newCart[itemIdx] = {id: action.id, quantity: newCart[itemIdx]['quantity']+1}
      }
    }
    return {
      ...state,
      cart: newCart,
    };
  }),
  on(ProductsActions.removeProductFromCart, (state, action) => {
    const newCart = state.cart.filter(item => item.id !== action.id);
    return {
      ...state,
      cart: newCart,
    };
  })
);

export function reducer(state: IProductsState | undefined, action: Action) {
  return ProductReducer(state, action);
}
