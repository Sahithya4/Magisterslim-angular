import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceComponent } from '../typescripts/resource.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ResourceService } from '../services/resource.service';
import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material';

describe("ResourceComponent", () => {
  let component: any;
  let fixture: ComponentFixture<ResourceComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [ResourceComponent],
      imports: [RouterTestingModule, ReactiveFormsModule,ToastrModule.forRoot(),MatDialogModule],
      providers: [{ provide: ResourceService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(ResourceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
