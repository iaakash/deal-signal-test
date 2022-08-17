export interface IProductRating {
  rate: number,
  count: number
}

export interface ICartItem {
  id: number,
  quantity: number
}

export interface IProductResponse {
  id: number,
  image: string,
  price: number,
  description: string,
  category: string,
  title: string,
  rating: IProductRating,

}

export interface IProduct {
  id: number,
  image: string,
  price: number,
  title: string,
  rating: IProductRating,
  addedToCart: boolean,
  quantity?: number
}
