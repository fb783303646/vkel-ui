import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'app/app.config';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService, private appConfig: AppConfig, private authService: AuthService, private router: Router) {

    translate.addLangs(['en', 'chs', 'fr', 'jp']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|chs|fr|jp/) ? browserLang : 'en');
  }

  ngOnInit() {
    if (!this.authService.authenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
