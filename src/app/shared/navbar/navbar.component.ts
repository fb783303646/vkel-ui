import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MenuItems } from 'app/shared/menu-items/menu-items';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'app/app.config';
import { AuthService } from 'app/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {

  isCollapsed;

  constructor(config: NgbDropdownConfig, public menuItems: MenuItems, private translate: TranslateService, private appConfig: AppConfig, private authService: AuthService, private router: Router) {
    config.up = false;
    config.autoClose = true;
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  changeLanguage(lng) {
    this.translate.use(lng);
  }

  changeTheme(theme) {
    this.appConfig.changeTheme(theme);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
