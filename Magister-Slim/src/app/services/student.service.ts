import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private router: Router, private http: HttpClient, private cookieService : CookieService) { }

  insertData(student)
  {
    console.log(student);
    return this.http.post<any>("http://localhost:8088/student",student);
  }
}
