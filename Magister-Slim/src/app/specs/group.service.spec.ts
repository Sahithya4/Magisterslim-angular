import { TestBed } from '@angular/core/testing';

import { GroupService } from '../services/group.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

describe('GroupService', () => {
  let http,cookieService,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide : CookieService, useValue : cookieService} ]
  }));

  it('should be created', () => {
    const service: GroupService = TestBed.get(GroupService);
    expect(service).toBeTruthy();
  });
});
