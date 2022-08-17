import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductResponse } from './model/product.model';

@Injectable({providedIn: 'root'})
export class ProductsService {
  BASE_URL: string = environment.BASE_URL;
  constructor(private _http: HttpClient) { }

  public fetchAllProducts(): Observable<IProductResponse[]> {
    return this._http.get<IProductResponse[]>(`${this.BASE_URL}/products`);
  }
}
