import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslatorService {

  defaultLanguage = 'en';
  availablelangs: any;
  currentLang: string = this.defaultLanguage;

  constructor(private translate: TranslateService) {

    translate.setDefaultLang(this.defaultLanguage);

    this.availablelangs = [
      { code: 'en', text: 'English' },
      { code: 'chs', text: '中文' },
      { code: 'jp', text: '日本語' },
      { code: 'fr', text: 'français' }
    ];

    this.useLanguage();
  }

  useLanguage(lang: string = this.defaultLanguage) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  getAvailableLanguages() {
    return this.availablelangs;
  }

  getCurrentLang() {
    for (const i in this.availablelangs) {
      if (this.availablelangs[i].code === this.currentLang) {
        return this.availablelangs[i].text;
      }
    }
  }

}
