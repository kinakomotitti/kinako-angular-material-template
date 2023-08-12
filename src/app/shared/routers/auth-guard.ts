import { Observable, of } from 'rxjs';
import { BrowserEnum } from 'src/app/definitions/enums/BrowserEnum';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  canActivate(): Observable<boolean> {
    const browserName = this.authService.detectBrowserName();
    if (browserName === BrowserEnum.Edge) {
      return of(true);
    } else {
      this.router.navigate(['unauthorized']);
      return of(false);
    }
  }
}
