import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHelper, Endpoints } from '../../helpers/http.helpers';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    protected httpHelper: HttpHelper
  ) { }

  public getAllProducts(): Observable<any> {
    const url = this.httpHelper.getUrl(Endpoints.ALL_PRODUCTS);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get(url, httpOptions);
  }

  public getProduct(code): Observable<any> {
    const url = this.httpHelper.getUrl(Endpoints.PRODUCT_DETAIL, {code});

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get(url, httpOptions);
  }
}
