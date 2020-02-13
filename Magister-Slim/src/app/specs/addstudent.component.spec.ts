import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentComponent } from '../typescripts/addstudent.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe("AddstudentComponent", () => {
  let component: any;
  let fixture: ComponentFixture<AddstudentComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [AddstudentComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [{ provide: StudentService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AddstudentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
