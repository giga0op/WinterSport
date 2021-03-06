import { Component, OnInit } from '@angular/core';
import { ProductnameService } from '../service/product-name/productname.service';
import {Productname} from '../models/productname';
import {Router} from '@angular/router';
import {ProductService} from '../service/getAllProduct/getallproduct.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  prodNames: Productname[];
  constructor(
    private poductName: ProductnameService) { }

  ngOnInit() {
    this.poductName.productNames().subscribe(res => {
      this.prodNames = res;
    });
  }
}
