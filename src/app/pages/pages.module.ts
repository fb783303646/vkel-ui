import { BsDropdownModule, CollapseModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AboutComponent } from './about/about.component';
import { ChartsComponent } from './charts/charts.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Http } from '@angular/http';
import { InputsComponent } from './inputs/inputs.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './routes';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export const PAGES_COMPONENTS = [
  HomeComponent,
  AboutComponent,
  InputsComponent,
  ChartsComponent,
  MapsComponent,
  LoginComponent
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
  ],
  declarations: PAGES_COMPONENTS,
  exports: PAGES_COMPONENTS
})
export class PagesModule { }
