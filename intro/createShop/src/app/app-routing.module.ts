import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductAddForm1Component } from './products/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './products/product-add-form2/product-add-form2.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './auth/login/login.guard';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'product-form', component: ProductAddForm1Component, canActivate: [LoginGuard]},
  {path: 'productsForms2', component: ProductAddForm2Component},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: "products", pathMatch: 'full'},
  {path: 'products/category/:categoryId', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
