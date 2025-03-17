import { Component, OnInit } from '@angular/core';
import { category } from './categories';
import { CateggoryService } from '../services/categoryService/categgory.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CateggoryService){}
  title = "Kategoriler"
  categories: category[] = []
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    })
  }

}
