import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Productname} from '../../models/productname';

@Injectable({
  providedIn: 'root'
})
export class ProductnameService {

  constructor(private http: HttpClient) { }

  productNames() {
    return this.http.get<Productname[]>('http://173.212.245.246:90/api/Product/GetProductTypes');
  }
}
