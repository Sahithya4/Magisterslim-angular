import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private router: Router, private http: HttpClient) { }

  public viewAssignment(studyGuideId,themeId,unitId): Observable<any> {
    return this.http.get<any>("http://localhost:8088/studyGuide/"+studyGuideId+"/theme/"+themeId+"/unit/"+unitId+"/assignment")
  }
  createAssignment(studyGuideId,themeId,unitId,assignment): Observable<any>{
    return this.http.post<any>("http://localhost:8088/studyGuide/"+studyGuideId+"/theme/"+themeId+"/unit/"+unitId+"/assignment",assignment);
  }
}
