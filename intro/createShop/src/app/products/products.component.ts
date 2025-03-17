import { Component, OnInit } from '@angular/core';
import { product } from './Products';
import * as alertifyjs from 'alertifyjs';
import { ProductService } from '../services/productService/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {}
  products: product[] = []
  title = "Ürünler"
  filterText = ""
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProduct(params["categoryId"]).subscribe(data => {
        console.log(params["categoryId"])
        this.products = data
      })
    })
  }
  cardAded(product: product) {
    alertifyjs.success(product.name + " Ürün sepete eklendi")
  }
}
