import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductSearchPipe } from './products/product-search.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddForms1Component } from './products/product-add-forms1/product-add-forms1.component';
import { ProductAddForm2Component } from './products/product-add-form2/product-add-form2.component';
import { RegisterComponent } from './auther/register/register.component';
import { LoginComponent } from './auther/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductSearchPipe,
    ProductAddForms1Component,
    ProductAddForm2Component,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
