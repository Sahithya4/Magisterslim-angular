import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { FormBuilder,Validators} from "@angular/forms"

@Component({
  selector: "app-login",
  templateUrl: "../partial/login.component.html",
  styleUrls: ["../css/login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,private formBuilder : FormBuilder) {}

  ngOnInit() {}

  loginForm = this.formBuilder.group({
    username : ['',Validators.required],
    password : ['',Validators.required]
  });

  saveLogin() {
    console.log(this.loginForm.value);
    this.loginService.validate(this.loginForm.value).subscribe(data => {
      console.log(data.role);
      if (data.role == "teacher") this.router.navigate(["teacher"]);
      else if (data.role == "student") this.router.navigate(["student"]);
    });
  }
}
