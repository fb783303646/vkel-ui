/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injector } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { SidebarComponent } from './sidebar.component';
import { SettingsService } from '../settings/settings.service';

describe('SidebarComponent', () => {
    const mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SettingsService,
                { provide: Router, useValue: mockRouter }
            ]
        }).compileComponents();
    });

    it('should create an instance', async(inject([SettingsService, Injector], (settingsService, injector) => {
        let component = new SidebarComponent(settingsService, injector);
        expect(component).toBeTruthy();
    })));
});
