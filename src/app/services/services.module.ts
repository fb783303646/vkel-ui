import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { ColorsService } from './colors/colors.service';
import { DataService } from './data/data.service';
import { PagetitleService } from './pagetitle/pagetitle.service';
import { TranslatorService } from './translator/translator.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    // SharedModule
  ],
  providers: [
    AuthService,
    ColorsService,
    PagetitleService,
    TranslatorService,
    DataService
  ]
})
export class ServicesModule {
  constructor( @Optional() @SkipSelf() parentModule: ServicesModule) {
    throwIfAlreadyLoaded(parentModule, 'ServicesModule');
  }
}
