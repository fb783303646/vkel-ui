import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, CollapseModule, ModalModule } from 'ngx-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  InputTextModule, ButtonModule, DataTableModule, SharedModule, TreeModule
} from 'primeng/primeng';

import { routes } from './routes';
import { InputsComponent } from './inputs/inputs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { ChartsComponent } from './charts/charts.component';
import { DataComponent } from './data/data.component';

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
  LoginComponent,
  DataComponent
];

@NgModule({
  imports: [
    // primeng
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    TreeModule,
    // others
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
