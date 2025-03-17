import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { category } from '../../categories/categories';

@Injectable({
  providedIn: 'root'
})
export class CateggoryService {
  path = "http://localhost:3000/categories"
  constructor(private http: HttpClient) { }

  getCategory():Observable<category[]> {
    return this.http.get<category[]>(this.path).pipe(
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if(err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu. ' + err.error.message 
    } else {
      errorMessage = "Sistemsel bir tata oluştu."
    }
    return throwError(errorMessage)
  }
}

