import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeComponent } from '../typescripts/theme.component';
import { ThemeService } from '../services/theme.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

describe("OfferinglevelComponent", () => {
  let component: any;
  let fixture: ComponentFixture<ThemeComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [ThemeComponent],
      imports: [RouterTestingModule, ReactiveFormsModule,ToastrModule.forRoot()],
      providers: [{ provide: ThemeService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(ThemeComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
