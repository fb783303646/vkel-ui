import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'inputs', component: InputsComponent },
      { path: 'data', loadChildren: './data/data.module#DataModule' },
      { path: 'charts', component: ChartsComponent },
      { path: 'maps', component: MapsComponent }]
  },
  { path: 'login', component: LoginComponent },
  // Not found
  { path: '**', redirectTo: 'home' }
];

export const routes = APP_ROUTES;
