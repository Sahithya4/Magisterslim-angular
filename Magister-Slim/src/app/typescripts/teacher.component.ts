import { Component, OnInit } from '@angular/core';
import { StudyGuideService } from '../services/study-guide.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-teacher',
  templateUrl: '../partial/teacher.component.html',
  styleUrls: ['../css/teacher.component.css']
})
export class TeacherComponent implements OnInit {

  user : any
  constructor(private router :Router, private cookieService : CookieService) { }

  ngOnInit() {
    this.user=this.cookieService.get('username');
    if(this.cookieService.get('token')=="")
    this.router.navigate([""]);
  }

  viewStudyGuides()
  {
    this.router.navigate(["studyGuide"])
  }
  viewAssignments()
  {
    this.router.navigate(["assignment"]);
  }
  addStudent()
  {
    this.router.navigate(["teacher/student"]);
  }
  viewResources()
  {
    this.router.navigate(["resource"]);
  }
  createGroup()
  {
    this.router.navigate(['group']);
  }
  offering(){
    this.router.navigate(['offering']);
  }
  onLogout()
  {
    this.cookieService.deleteAll();
    console.log(this.cookieService.get("token")+"cleared");
  }
}
