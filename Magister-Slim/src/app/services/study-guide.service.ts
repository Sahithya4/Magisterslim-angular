import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StudyGuideService {

  constructor(private router: Router, private http: HttpClient, private cookieService : CookieService) { }

  public viewStudyGuide(): Observable<any> {
    return  this.http.get<any>("http://localhost:8088/studyGuides")
  }

  insertData(studyGuide:any):Observable<any>
  {
    return this.http.post<any>("http://localhost:8088/studyGuide",studyGuide);
  }

  deleteStudyGuide(studyGuideId : any)
  {
    return this.http.delete<any>("http://localhost:8088/studyGuide/"+studyGuideId);
  }
  recordStudyGuideDetails(studyGuide:any):Observable<any>
  {
    return this.http.post<any>("http://localhost:8088/studyGuide",studyGuide);
  }
 
}
