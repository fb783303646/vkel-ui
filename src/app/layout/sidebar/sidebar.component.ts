import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  menu: Array<any>;
  router: Router;
  sidebarOffcanvasVisible: boolean;

  constructor(public settings: SettingsService, private injector: Injector) {

  }

  ngOnInit() {
    this.router = this.injector.get(Router);
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        this.settings.app.sidebar.visible = false;
      });
  }

  closeSidebar() {
    this.settings.app.sidebar.visible = false;
  }

  toggleSelect(event) {
    const item = this.getItemElement(event).parentNode;
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  }

  getItemElement(event) {
    const element = event.target,
      parent = element.parentNode;
    if (element.tagName.toLowerCase() === 'a') {
      return element;
    }
    if (parent.tagName.toLowerCase() === 'a') {
      return parent;
    }
    if (parent.parentNode.tagName.toLowerCase() === 'a') {
      return parent.parentNode;
    }
  }
}
