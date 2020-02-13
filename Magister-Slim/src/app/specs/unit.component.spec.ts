import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitComponent } from '../typescripts/unit.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { UnitService } from '../services/unit.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { ThemeService } from "../services/theme.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudyguideComponent } from '../typescripts/studyguide.component';

describe("UnitComponent", () => {
  let component: any;
  let fixture: ComponentFixture<UnitComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [UnitComponent,StudyguideComponent],
      imports: [RouterTestingModule, ReactiveFormsModule,ToastrModule.forRoot(),HttpClientTestingModule],
      providers: [{ provide: UnitService,ThemeService,ResourceService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(UnitComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
