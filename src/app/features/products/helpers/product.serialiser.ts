import { IProductResponse, IProduct } from './../model/product.model';

export function mapProductsResponseToProducts(products: IProductResponse[]): IProduct[] {
  let processedProducts: IProduct[] = [];
  processedProducts = products.map(product => {
    return {
      id: product.id,
  image: product.image,
  price: product.price,
  title: product.title,
  rating: product.rating,
  addedToCart: false,
    }
  });
  return processedProducts;
}
