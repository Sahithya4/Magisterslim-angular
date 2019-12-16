import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private router: Router, private http: HttpClient) { }

  public viewStudyGuide(): Observable<any> {
    return  this.http.get<any>("http://localhost:8088/assignment")
  }
}
