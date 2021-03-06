import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../service/getAllProduct/getallproduct.service';
import { Router } from '@angular/router';

import {Product} from '../../../models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductnameService} from '../../../service/product-name/productname.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product;
  productNames = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private getProduct: ProductService,
    private ProductNameService: ProductnameService,
    private  RT: Router
  ) {
    this.productName();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!!paramMap.get('id')) {
        this.loadProducts(+paramMap.get('id'));
      } else {
        this.loadProducts();
      }
    });
}

loadProducts(productId: number = null, check: boolean = null ) {
    this.getProduct.getAllProduct(productId, check).subscribe(res => {
    this.products = res;
    });
  }


  productName() {
    this.ProductNameService.productNames().subscribe(res => {
      this.productNames = res;
    });
  }
}



