import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { TranslatorService } from "app/services/translator/translator.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  userToLogin: { username: string; password: string };

  constructor(private router: Router, public authService: AuthService, private translator: TranslatorService) {
    this.userToLogin = { username: null, password: null };
  }

  ngOnInit() {
  }

  async login() {
    const result = await this.authService.login(this.userToLogin.username, this.userToLogin.password);
    console.log(result);
    this.router.navigate(['/']);
  }
}
