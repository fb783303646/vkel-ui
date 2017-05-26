
import { MenuItems } from './shared/menu-items/menu-items';
import { TranslateService } from '@ngx-translate/core';

const PROVIDERS = [MenuItems];

export const APP_PROVIDERS = [
  TranslateService,
  ...PROVIDERS
];
