import { TestBed } from '@angular/core/testing';

import { ThemeService } from '../services/theme.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

describe('ThemeService', () => {
  let http,cookieService,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide : CookieService, useValue : cookieService} ]
  }));

  it('should be created', () => {
    const service: ThemeService = TestBed.get(ThemeService);
    expect(service).toBeTruthy();
  });
});
