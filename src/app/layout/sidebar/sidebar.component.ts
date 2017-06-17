import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// declare var $: any;

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

  handleSidebar(event) {
    // let item = this.getItemElement(event);

    // if (!item) return;

    // let ele = $(item),
    //   liparent = ele.parent()[0];

    // let lis = ele.parent().parent().children();

    // lis.find('li').removeClass('active');

    // $.each(lis, function (key, li) {
    //   if (li !== liparent)
    //     $(li).removeClass('active');
    // });
    // let next = ele.next();
    // if (next.length && next[0].tagName === 'UL') {
    //   ele.parent().toggleClass('active');
    //   event.preventDefault();
    // }
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
