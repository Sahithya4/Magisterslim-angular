import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private router: Router, private http: HttpClient) { }

  findUnit(themeId,studyGuideId)
  {
    //return this.http.get<any>("http://localhost:8088/studyGuide/"+studyGuideId+"/theme/"+themeId+"/unit/"+unitId.id);
  }
  insertData(studyGuideId,themeId,unit):Observable<any> {
    return this.http.post<any>("http://localhost:8088/studyGuide/"+studyGuideId+"/theme/"+themeId+"/unit",unit);
  }
  deleteUnit(studyGuideId,themeId,unitId){
    return this.http.delete<any>("http://localhost:8088/studyGuide/"+studyGuideId+"/theme/"+themeId+"/unit/"+unitId);
  }
  addResource(studyGuideId,themeId,unitId,resource): Observable<any> {
    console.log(studyGuideId,themeId,unitId,resource)
    return this.http.post<any>("http://localhost:8088/studyGuide/"+studyGuideId+"/theme/"+themeId+"/unit/"+unitId,resource);
  }
}
