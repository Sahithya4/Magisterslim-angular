import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { FormBuilder,Validators} from "@angular/forms"
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: "app-login",
  templateUrl: "../partial/login.component.html",
  styleUrls: ["../css/login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,private formBuilder : FormBuilder,) {}

  ngOnInit() {}

  loginForm = this.formBuilder.group({
    username : ['',Validators.required],
    password : ['',Validators.required]
  });
  login : any;

  saveLogin() {
    console.log(this.loginForm.value);
    this.loginService.validate(this.loginForm.value).subscribe(data => {
      if (data.role == "teacher") this.router.navigate(["studyGuide"]);
      else if (data.role == "student") this.router.navigate(["student"]);
      else{
        this.login="Username or password is incorrect";
      }
    });
  }
}
