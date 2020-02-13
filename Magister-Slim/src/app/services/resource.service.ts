import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private router: Router, private http: HttpClient) { }

  public viewResource(): Observable<any> {
    return  this.http.get<any>("http://localhost:8088/resources")
  }
  insertData(resource:any):Observable<any> {
    return this.http.post<any>("http://localhost:8088/resource",resource);
  }
  deleteResource(resource:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8088/resource/"+resource.resourceId);
  }
  updateDetails(StudyGuide,Theme,Unit,resource):Observable<any>{
    return this.http.post<any>("http://localhost:8088/studyGuide/"+StudyGuide.studyGuideId+"/theme/"+Theme.themeId+"/unit/"+Unit.unitId,resource);
  }
}
