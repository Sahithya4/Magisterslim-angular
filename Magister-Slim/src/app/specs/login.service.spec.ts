import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

describe('LoginService', () => {
  let http,cookieService,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide : CookieService, useValue : cookieService} ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('should have validate function',inject([LoginService],(service : LoginService) => {
    expect(service.validate).toBeTruthy();
  }));
  it('checks hello is hello',()=>{
    expect('hello').toBe('hello')
  })
});
