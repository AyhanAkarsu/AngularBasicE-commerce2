import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { product } from '../Products';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css']
})
export class ProductAddForm2Component implements OnInit{
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.createProductAddForm()
  }
  productAddForm!: FormGroup; 
  product:product = new product()

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]
    })
  }

  add() {
    if(this.productAddForm.valid) {
      this.productAddForm = Object.assign({}, this.productAddForm.value)
    }
  }
}
