import { TestBed } from '@angular/core/testing';

import { OfferingService } from '../services/offering.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StudyguideComponent } from '../typescripts/studyguide.component';

describe('OfferingService', () => {
  let http,cookieService,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide : CookieService, useValue : cookieService},{provide:StudyguideComponent} ]
  }));

  it('should be created', () => {
    const service: OfferingService = TestBed.get(OfferingService);
    expect(service).toBeTruthy();
  });
});
