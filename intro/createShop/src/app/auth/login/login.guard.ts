import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginComponent } from "./login.component";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private login: LoginComponent, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged = this.login.isLoggedIn()
        if(logged) {
            return true
        }
        this.router.navigate(["/login"])
        return false
    }
    
}