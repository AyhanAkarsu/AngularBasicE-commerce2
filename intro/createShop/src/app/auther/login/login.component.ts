import { Component } from '@angular/core';
import { AutherService } from 'src/app/services/autherService/auther.service';
import * as alertifyjs from 'alertifyjs'
import { User } from './login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private autherService: AutherService, private router: Router) {}
  model: User = new User()
  loggedIn:boolean = false
  
  login(form: NgForm) {
    this.autherService.getLogin(this.model).subscribe(data => {
        if (Array.isArray(data) && data.length !== 0) {
            if(data[0].password === this.model.password){
              this.router.navigate(["/"])
              alertifyjs.success(data[0].name + " Hoşgeldiniz...")
              localStorage.setItem("isLogged", data[0].name)
              this.loggedIn = true
            } else {
              alertifyjs.error("Şifreyi hatalı girdiniz..")
            }
        } else {
           alertifyjs.error("Kullanıcı bulunamadı...")
        }
    });
  }

  isLoggedIn(): boolean {  
    return this.loggedIn
  }

  logOut() {
    localStorage.removeItem("isLogged")
    this.loggedIn = false
    alertifyjs.success("Başarılı bir şekilde çıkış yapıldı...")
  }

}
