import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../../models/user';

@Injectable()
export class AuthService {

  private _user: User;

  constructor(private http: Http) {
    this._user = JSON.parse(localStorage.getItem('user'));
  }

  getUser(): User {
    return this._user;
  }

  login(username: string, password: string) {
    const headers: Headers = new Headers({ 'Content-Type': 'application/json' });

    return new Promise((resolve, reject) => {
      this.http
        .post('/api/login', JSON.stringify({ username, password }), { headers })
        .map(res => res.json())
        .subscribe(
        data => {
          if (data && data.user) {
            this.authSuccess(data.user);
          }
          resolve(data);
        },
        err => {
          reject(err);
        });
    });
  }

  logout() {
    this._user = null;
    localStorage.removeItem('user');
  }

  authSuccess(user) {
    this._user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  authenticated() {
    return localStorage.getItem('user');
  }
}
