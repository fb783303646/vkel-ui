import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  private currentTheme: string;

  constructor() {
    this.currentTheme = 'theme-windows';
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  changeTheme(theme: string) {

    switch (theme) {
      case 'windows':
        this.currentTheme = 'theme-windows';
        break;
      case 'office':
        this.currentTheme = 'theme-office';
        break;
      case 'xbox':
        this.currentTheme = 'theme-xbox';
        break;
      case 'bing':
        this.currentTheme = 'theme-bing';
        break;
      default:
        this.currentTheme = 'theme-windows';
        break;
    }
    console.log(this.currentTheme);
  }
}
