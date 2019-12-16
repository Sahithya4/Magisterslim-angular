import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudyGuideService {

  constructor(private router: Router, private http: HttpClient) { }

  public viewStudyGuide(): Observable<any> {
    return  this.http.get<any>("http://localhost:8088/studyGuide")
  }

  insertData(studyGuide:any):Observable<any>
  {
    return this.http.post<any>("http://localhost:8088/studyGuide",studyGuide);
  }
}
