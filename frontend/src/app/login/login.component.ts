import { Component, OnInit } from '@angular/core';
import { AppLoginService } from '../service/app-login.service';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  clientId: string;
  callbackUrl: string;

  constructor(
    private route: ActivatedRoute,
    private loginService: AppLoginService,
    private router: Router) {
      this.clientId = environment.googleClientId;
      this.callbackUrl = environment.backendUrl + '/api/auth/callbackfromgoogle';
  }

  ngOnInit(): void {
    let authToken = this.route.snapshot.queryParamMap.get('token') ?? '';
    if (authToken != '') {
      this.loginService.saveJwtToken(authToken);
      this.router.navigate(['./home']);
    }
  }
}
