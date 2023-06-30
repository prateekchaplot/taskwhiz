import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLoginService {
  public isLoggedIn: boolean;

  constructor() {
    let jwtToken = localStorage.getItem('jwtToken');
    this.isLoggedIn = !!jwtToken;
  }

  saveJwtToken(jwtToken: string) {
    this.isLoggedIn = true;
    localStorage.setItem('jwtToken', jwtToken);
  }
}
