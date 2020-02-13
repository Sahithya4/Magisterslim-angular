import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OfferinglevelService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  public getOfferingLevelDetails(offeringId, offeringLevelID): Observable<any> {
    return this.http.get<any>(
      "http://localhost:8088/offering/" +
        offeringId +
        "/offering-level/" +
        offeringLevelID
    );
  }
  public createOfferingLevel(offeringId, offeringLevel): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8088/offering/" + offeringId + "/offering-level",
      offeringLevel
    );
  }
  public findOfferinglevel(offeringLevelId, offeringId): Observable<any> {
    return this.http.get<any>(
      "http://localhost:8088/offering/" +
        offeringId +
        "/offering-level/" +
        offeringLevelId
    );
  }
  public deleteOfferingLevel(offeringId, offeringLevelId): Observable<any> {
    return this.http.delete<any>(
      "http://localhost:8088/offering/" +
        offeringId +
        "/offering-level/" +
        offeringLevelId
    );
  }
  public getOfferingLevel(offeringLevelId): Observable<any> {
    return this.http.get<any>(
      "http://localhost:8088/offering-level/" + offeringLevelId
    );
  }
}
