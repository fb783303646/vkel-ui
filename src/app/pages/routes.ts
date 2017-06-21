import { InputsComponent } from './inputs/inputs.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { DataComponent } from './data/data.component';
import { ChartsComponent } from './charts/charts.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'inputs', component: InputsComponent },
      { path: 'data', component: DataComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'maps', component: MapsComponent }]
  },
  { path: 'login', component: LoginComponent },
  // Not found
  { path: '**', redirectTo: 'home' }
];

export const routes = APP_ROUTES;
