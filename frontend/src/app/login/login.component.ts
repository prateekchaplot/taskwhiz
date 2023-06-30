import { Component } from '@angular/core';
import { AppLoginService } from '../service/app-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: AppLoginService) {
  }

  logInOnClick() {
    this.loginService.logIn();
  }
}
