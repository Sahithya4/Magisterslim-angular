import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherComponent } from '../typescripts/teacher.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CookieService } from 'ngx-cookie-service';

describe("TeacherComponent", () => {
  let component: any;
  let fixture: ComponentFixture<TeacherComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [TeacherComponent],
      imports: [RouterTestingModule, ReactiveFormsModule,ToastrModule.forRoot()],
      providers: [{ provide: CookieService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(TeacherComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
