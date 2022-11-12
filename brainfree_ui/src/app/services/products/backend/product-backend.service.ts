import {Injectable} from '@angular/core';
import {AppSettings} from "../../../app-settings";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../models/product";


@Injectable({
  providedIn: 'root'
})
export class ProductBackendService {

  url = `${AppSettings.URL}products`;

  constructor(private readonly http: HttpClient) {
  }

  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(this.url)
  }
  getProductByCode = (code: string): Observable<Product[]> => {
    const url = `${this.url}/${code}`
    return this.http.get<Product[]>(url);
  }

  createProduct = (product: Product): Observable<Product> => {
    const url = `${this.url}/create/`;
    return this.http.post<Product>(url, product);
  }

  updateProduct = (product: Product): Observable<Product> => {
    const url = `${this.url}/edit`;
    return this.http.put<Product>(url, product);
  }

}
