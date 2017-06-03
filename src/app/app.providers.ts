
import { MenuItems } from './shared/menu-items/menu-items';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'app/app.config';
import { AuthService } from 'app/services/auth.service';
import { MockBackendProvider } from './mock/mock-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

const PROVIDERS = [MenuItems];

export const APP_PROVIDERS = [
  AppConfig,
  TranslateService,
  AuthService,
  MockBackendProvider,
  MockBackend,
  BaseRequestOptions,
  ...PROVIDERS
];
