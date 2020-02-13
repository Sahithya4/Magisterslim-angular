import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {

  constructor(private router: Router, private http: HttpClient, private cookieService : CookieService) { }

  public getOfferingsList(): Observable<any> {
    return  this.http.get<any>("http://localhost:8088/offerings")
  }
  public createOffering(offering):Observable<any>{
    return this.http.post<any>("http://localhost:8088/offering",offering);
  }
  public deleteOffering(offeringId):Observable<any>{
    return this.http.delete<any>("http://localhost:8088/offering/"+offeringId)
  }
}
