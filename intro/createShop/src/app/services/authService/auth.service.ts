import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/auth/login/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/users"

  getLogin(user: User): Observable<User> {
    return this.http.get<User>(`${this.path+"?name="+user.name}`).pipe(
      catchError(this.hanleError)
    )
  }

  postRegister(user: User): Observable<User> {
    return this.http.post<User>(this.path, user).pipe(
      catchError(this.hanleError)
    )
  }

  hanleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if(err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu. " + err.error.message 
    } else {
      errorMessage = "Sistemsel bir hata oluştu."
    }
    return throwError(errorMessage)
  }

}
