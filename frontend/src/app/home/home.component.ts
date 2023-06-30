import { Component } from '@angular/core';
import { AppLoginService } from '../service/app-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private loginService: AppLoginService) {
  }

  signOut() {
    this.loginService.removeJwtToken();
    location.reload();
  }
}
