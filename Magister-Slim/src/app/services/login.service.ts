import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { User } from "src/User";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private router: Router, private http: HttpClient) {}

  validate(loginDetails: User): Observable<User> {
    let v = this.http.post<User>("http://localhost:8088/user-validate",loginDetails);
    return v.pipe();
  }
}
