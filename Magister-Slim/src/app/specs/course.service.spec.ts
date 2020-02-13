import { TestBed } from '@angular/core/testing';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


describe('CourseService', () => {
  let http,cookieService,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide : CookieService, useValue : cookieService} ]
  }));

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });
});
