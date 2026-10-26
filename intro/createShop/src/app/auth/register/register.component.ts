import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/authService/auth.service';
import { User } from '../login/login';
import * as alertifyjs from "alertifyjs"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private authService: AuthService, private router: Router) {}
model: User = new User()
register(form: NgForm) {
  this.authService.postRegister(this.model).subscribe(data => {
    this.router.navigate(["/login"])
    alertifyjs.success(data.name + " başarılı bir şekilde kayıt oldunuz..")
  },
  (error) => {
    alertifyjs.danger("Kayıt işlemi başarısız oldu.. " + error)
  })
}


}
