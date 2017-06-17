import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

import * as screenfull from 'screenfull';

import { SettingsService } from './settings.service';
import { TranslatorService } from '../../services/translator/translator.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {

  @ViewChild('fsbutton') fsbutton;
  @ViewChild('settingsModal') public settingsModal: ModalDirective;

  constructor(public settings: SettingsService, public translator: TranslatorService) { }

  ngOnInit() { }

  updateTheme(theme) {
    const body = document.getElementsByTagName('body')[0];
    const oldThemes = body.className.match(/(^|\s)theme-\S+/g);
    if (oldThemes) {
      body.classList.remove(oldThemes[0].trim());
    }

    body.classList.add(theme);
  }

  toggleFullScreen() {

    if (screenfull.enabled) {
      screenfull.toggle();
    }

  }

}
