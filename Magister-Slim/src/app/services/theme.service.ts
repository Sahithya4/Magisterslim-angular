import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private router: Router, private http: HttpClient) { }

  insertData(theme:any,studyGuideId):Observable<any> {
    return this.http.post<any>("http://localhost:8088/studyGuide/"+studyGuideId+"/theme",theme);
  }
}
