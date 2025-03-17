import { Component, OnInit } from '@angular/core';
import { product } from '../Products';
import { CateggoryService } from 'src/app/services/categoryService/categgory.service';
import { category } from 'src/app/categories/categories';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/productService/product.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css']
})
export class ProductAddForms1Component implements OnInit {
  constructor(private categoryService: CateggoryService, private productService: ProductService) {}
  model: product = new product()
  categories: category[] = []
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    })
  }
  add(form: NgForm){
    this.productService.postProduct(this.model).subscribe(data => {
      alertifyjs.success(data.name + " başarılı bir şekilde ekelendi.")
    })
  }
}
