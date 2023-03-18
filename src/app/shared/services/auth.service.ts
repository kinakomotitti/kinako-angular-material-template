import { Injectable } from '@angular/core';
import { BrowserEnum } from 'src/app/definitions/enums/BrowserEnum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private browserName: BrowserEnum;

  constructor() {
    this.browserName = this.detectBrowserName();
  }

  detectBrowserName(): BrowserEnum {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edg') > -1:
        return BrowserEnum.Edge;
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return BrowserEnum.Chrome;
      default:
        return BrowserEnum.Other;
    }
  }
}
