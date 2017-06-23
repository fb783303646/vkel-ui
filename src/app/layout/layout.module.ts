import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './settings/settings.service';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  providers: [
    SettingsService
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent
  ]
})
export class LayoutModule { }
