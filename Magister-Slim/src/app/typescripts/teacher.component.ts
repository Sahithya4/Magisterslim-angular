import { Component, OnInit } from '@angular/core';
import { StudyGuideService } from '../services/study-guide.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: '../partial/teacher.component.html',
  styleUrls: ['../css/teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
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
    this.router.navigate(["addstudent"]);
  }
  viewResources()
  {
    this.router.navigate(["resource"]);
  }
}
