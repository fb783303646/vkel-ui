
import { MenuItems } from './shared/menu-items/menu-items';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'app/app.config';

const PROVIDERS = [MenuItems];

export const APP_PROVIDERS = [
  AppConfig,
  TranslateService,
  ...PROVIDERS
];
