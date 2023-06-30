import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppLoginService } from './service/app-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router, private loginService: AppLoginService) { }

  canActivate(): boolean {
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}