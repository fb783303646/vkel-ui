import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared.module';
import { TablesComponent } from './tables/tables.component';
import { TreesComponent } from './trees/trees.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'trees', component: TreesComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TablesComponent,
    TreesComponent
  ],
  exports: [
    RouterModule
  ]
})
export class DataModule { }
