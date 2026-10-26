import { Component, OnInit } from '@angular/core';
import { category } from './categories';
import { CategoryService } from '../services/categoryService/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService){}
  title = "Kategoriler"
  categories: category[] = []
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    })
  }

}
