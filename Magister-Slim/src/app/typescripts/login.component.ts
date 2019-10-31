import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { User } from "src/User";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "../partial/login.component.html",
  styleUrls: ["../css/login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  saveLogin(loginDetails: User) {
    console.log(loginDetails);
    this.loginService.validate(loginDetails).subscribe(data => {
      console.log(data);
      console.log(data.role);
      if (data.role == "teacher") this.router.navigate(["teacher"]);
      else if (data.role == "student") this.router.navigate(["student"]);
    });
    // this.router.navigate(['login1']);
  }
}
