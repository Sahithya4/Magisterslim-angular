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

  findTheme(themeId,studyGuide){
    return this.http.get<any>("http://localhost:8088/studyGuide/"+studyGuide.studyGuideId+"/theme/"+themeId);
  }
  deleteTheme(studyGuide,theme){
    return this.http.delete<any>("http://localhost:8088/studyGuide/"+studyGuide.studyGuideId+"/theme/"+theme.themeId);
  }
}
