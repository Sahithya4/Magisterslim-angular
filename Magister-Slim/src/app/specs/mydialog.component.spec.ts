import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydialogComponent } from '../typescripts/mydialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatDialog,MatDialogModule } from '@angular/material';

describe("MydialogComponent", () => {
  let dialog: MatDialog;
  let component: any;
  let fixture: ComponentFixture<MydialogComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [MydialogComponent],
      imports: [MatDialogModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(MydialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
