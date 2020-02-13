import { TestBed } from '@angular/core/testing';

import { OfferinglevelService } from '../services/offeringlevel.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

describe('OfferinglevelService', () => {
  let http,cookieService,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide : CookieService, useValue : cookieService} ]
  }));

  it('should be created', () => {
    const service: OfferinglevelService = TestBed.get(OfferinglevelService);
    expect(service).toBeTruthy();
  });
});
