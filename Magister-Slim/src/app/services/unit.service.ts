import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private router: Router, private http: HttpClient) { }

  findUnit(themeId,studyGuideId)
  {
    //return this.http.get<any>("http://localhost:8088/studyGuide/"+studyGuideId+"/theme/"+themeId+"/unit/"+unitId.id);
  }
}
