import { Injectable } from '@angular/core';

export interface MenuItem {
  name: string;
  link: string;
}

const MENU_ITEMS = [
  {
    name: 'Home',
    link: '/home'
  },
  {
    name: 'About',
    link: '/about'
  }
];

@Injectable()
export class MenuItems {

  getAllItems(): MenuItem[] {
    return MENU_ITEMS;
  }
}
