import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { of } from 'rxjs';
import { observable, Observable } from 'rxjs';
import { BrowserEnum } from 'src/app/definitions/enums/BrowserEnum';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private  readonly router: Router,
    private readonly authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    var browserName = this.authService.detectBrowserName();
    if (browserName === BrowserEnum.Chrome) {
      return of(true);
    } else {
      this.router.navigate(["unauthorized"]);
      return of(false);
    }
  }
}
