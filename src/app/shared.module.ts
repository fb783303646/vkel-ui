import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BaseRequestOptions } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonModule } from 'primeng/primeng';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/primeng';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { InputTextModule } from 'primeng/primeng';
import { MockBackend } from '@angular/http/testing';
import { MockBackendProvider } from 'app/mock/mock-backend';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RouterModule } from '@angular/router';
import { SvgreplaceDirective } from './directives/svgreplace/svgreplace.directive';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { TreeModule } from 'primeng/primeng';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

// https://angular.io/styleguide#!#04-10
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [MockBackendProvider,
    MockBackend,
    BaseRequestOptions,
  ],
  declarations: [
    SvgreplaceDirective
  ],
  exports: [
    // primeng
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TreeModule,
    // others
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    // AccordionModule,
    // AlertModule,
    // ButtonsModule,
    // CarouselModule,
    // CollapseModule,
    // DatepickerModule,
    BsDropdownModule,
    ModalModule,
    // PaginationModule,
    // ProgressbarModule,
    // RatingModule,
    // TabsModule,
    // TimepickerModule,
    // TooltipModule,
    // TypeaheadModule,

  ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
