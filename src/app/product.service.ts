import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 url = "http://172.18.5.132:9898/product"
  constructor(private http: HttpClient) { }

  getProducts()
  {
    console.log("inside getprod")
    return this.http.get(this.url)
  }
}
