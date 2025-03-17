import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductAddForms1Component } from './products/product-add-forms1/product-add-forms1.component';
import { ProductAddForm2Component } from './products/product-add-form2/product-add-form2.component';
import { RegisterComponent } from './auther/register/register.component';
import { LoginComponent } from './auther/login/login.component';
import { LoginGuard } from './auther/login/login.guard';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'productsForms1', component: ProductAddForms1Component, canActivate: [LoginGuard]},
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
