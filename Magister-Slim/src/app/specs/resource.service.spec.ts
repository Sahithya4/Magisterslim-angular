import { TestBed } from '@angular/core/testing';

import { ResourceService } from '../services/resource.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { OfferingComponent } from '../typescripts/offering.component';

describe('ResourceService', () => {
  let http,cookieService,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide : CookieService, useValue : cookieService},{provide:OfferingComponent} ]
  }));
  it('should be created', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    expect(service).toBeTruthy();
  });
});
