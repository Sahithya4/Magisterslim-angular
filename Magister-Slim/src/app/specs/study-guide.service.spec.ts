import { TestBed } from '@angular/core/testing';

import { StudyGuideService } from '../services/study-guide.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StudyguideComponent } from '../typescripts/studyguide.component';

describe('StudyGuideService', () => {
  let http,cookieService,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide : CookieService, useValue : cookieService},{provide:StudyguideComponent}]
  }));
  it('should be created', () => {
    const service: StudyGuideService = TestBed.get(StudyGuideService);
    expect(service).toBeTruthy();
  });
  it('should be having create StudyGuide',()=>{
    const service: StudyGuideService = TestBed.get(StudyGuideService);
    expect(service.insertData).toBeTruthy();
  })
});
