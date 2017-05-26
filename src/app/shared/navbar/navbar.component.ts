import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MenuItems } from 'app/shared/menu-items/menu-items';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {

  constructor(config: NgbDropdownConfig, public menuItems: MenuItems, private translate: TranslateService) {
    config.up = false;
    config.autoClose = true;
  }

  ngOnInit() {
  }

  change(lng) {
    this.translate.use(lng);
  }

}
