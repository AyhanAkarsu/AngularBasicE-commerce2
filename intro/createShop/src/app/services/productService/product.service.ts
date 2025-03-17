import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { product } from '../../products/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }
  
  getProduct(categoryId: any):Observable<product[]> {
    const url = categoryId ? `${this.path}?categoryId=${categoryId}` : this.path
    return this.http.get<product[]>(url).pipe(
      tap(p=>{
        console.log(categoryId)
      }),
      catchError(this.hanleError)
    )
  }

  postProduct(product: product):Observable<product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Token'
       })
    }
    return this.http.post<product>(this.path, product, httpOptions).pipe(
      catchError(this.hanleError)
    )
  }

  hanleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if(err.error instanceof ErrorEvent) {
      errorMessage = "Hata oluştu. " + err.error.message
    } else {
      errorMessage = "Sistemsel bir hata oluştu."
    }
    return throwError(errorMessage)
  }
}
