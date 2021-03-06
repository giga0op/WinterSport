import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../../models/product';
import { environment } from '../../../environments/environment';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

 public getAllProduct(productTypeId?, check?) {

   let Url = this.baseUrl;
   if (productTypeId != null)  {
     Url = Url + `productTypeId=${productTypeId}`;
     console.log(Url);
    }
   if (check != null) {
     Url = Url + `isNew=${check}`;
     console.log(Url);
 }
   return  this.http.get<Product>(Url);
  }
}

