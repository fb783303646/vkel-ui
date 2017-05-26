import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/pages/home/home.component';
import { AboutComponent } from 'app/pages/about/about.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
