import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";

export class UserAuth {
  constructor(
    public status: string,
    public role: string,
    public name: string
  ) {}
}
@Injectable({
  providedIn: "root"
})
export class LoginService {
  viewLists: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}


  validate(loginDetails: any): Observable<UserAuth> {
    return this.http
      .post<any>("http://localhost:8088/login", loginDetails)
      .pipe(
        map(userData => {
          console.log(userData);
          this.cookieService.set("username", loginDetails.username);
          let token = userData.status;
          this.cookieService.set("token", token);
          return userData;
        })
      );
  }
  getToken() {
    if (this.cookieService.get("token") == "") this.router.navigate([""]);
    return this.cookieService.get("token");
  }
}
