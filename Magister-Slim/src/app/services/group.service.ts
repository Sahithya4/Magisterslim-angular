import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GroupService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  viewGroup() {
    return this.http.get<any>("http://localhost:8088/group");
  }
  public getAllGroups(): Observable<any> {
    return this.http.get<any>("http://localhost:8088/groups/get-groups");
  }
  public createGroup(
    offeringId: any,
    offeringLevelId: any,
    courseId: any,
    group: any
  ): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8088/offering/" +
        offeringId +
        "/offering-level/" +
        offeringLevelId +
        "/course/" +
        courseId +
        "/group",
      group
    );
  }

  deleteGroup(offeringId,offeringLevelId,courseId,list : any){
    console.log(offeringId,offeringLevelId,courseId,list.groupId);
    return this.http.delete<any>("http://localhost:8088/offering/" +
    offeringId +
    "/offering-level/" +
    offeringLevelId +
    "/course/" +
    courseId +
    "/group",list.groupId);
  }
}
