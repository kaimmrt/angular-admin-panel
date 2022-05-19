import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private notificationService: NzNotificationService) {

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAuthenticated()) {
            return true
        }
        else {
            this.router.navigate(["login"])
            this.notificationService.create('info', 'Notice', 'You must login the system')
            window.alert("Sisteme giriş yapmalısınız...")
            return false
        }
        return true;
    }
}