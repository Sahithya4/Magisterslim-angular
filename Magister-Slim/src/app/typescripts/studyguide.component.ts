import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudyGuideService } from '../services/study-guide.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseService } from './course.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-studyguide',
  templateUrl: '../partial/studyguide.component.html',
  styleUrls: ['../css/studyguide.component.css']
})
export class StudyguideComponent implements OnInit {
  viewLists: any;
  studyGuide :any;
  courseDetails: any;

  constructor(private router :Router,private studyGuideService : StudyGuideService,private formBuilder: FormBuilder
    ,private courseService: CourseService, private themeService: ThemeService) { 
    this.courseService.getAllCourses().subscribe(course => { 
      this.courseDetails = course;
    });
  }

  ngOnInit() {
    this.studyGuideService.viewStudyGuide().subscribe(data=>{console.log(data);this.viewLists=data;
    });
  }
  studyGuideDetails = this.formBuilder.group({
    studyGuideId: [,Validators.required],
    studyGuideName: ['',Validators.required],
    courseReference: this.formBuilder.group({
      courseId: [],
      courseName: [],
      isActive: [true]
    }),
    validOnwards: [,Validators.required],
    validUpto: [,Validators.required],
    active: [true]
  })
  themeDetails = this.formBuilder.group({
    themeId: [,Validators.required],
    themeName: ['',Validators.required],
    active: [true]
  })
  
  createStudyGuide()
  {
    var studyGuide=this.studyGuideDetails.value;
    console.log(studyGuide)
    studyGuide=this.courseService.updateCourseDetails(studyGuide,this.courseDetails)
    this.studyGuideService.insertData(studyGuide).subscribe(data => console.log(data)); 
    this.studyGuideService.viewStudyGuide().subscribe(data=>this.viewLists=data);
    this.studyGuideService.viewStudyGuide().subscribe(data=>this.viewLists=data);
  }
  createTheme()
  {
    console.log(this.studyGuide.studyGuideId)
    var theme=this.themeDetails.value;
    console.log(theme)
    this.themeService.insertData(theme,this.studyGuide.studyGuideId).subscribe(data => console.log(data));
  }
  onStudyGuide(lists)
  {
    this.studyGuide=lists
    console.log(lists)
    this.router.navigate(["studyGuide/"+this.studyGuide.studyGuideId+"/theme"]);
  }

}
