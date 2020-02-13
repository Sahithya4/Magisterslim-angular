import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "../typescripts/login.component";
import { LoginService } from "../services/login.service";
import {ReactiveFormsModule,} from "@angular/forms";
import {BrowserDynamicTestingModule,platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("LoginComponent", () => {
  let component: any;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [{provide:LoginService}],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
