import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userToLogin: { username: string; password: string };

  constructor(private authService: AuthService, private router: Router) {
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
