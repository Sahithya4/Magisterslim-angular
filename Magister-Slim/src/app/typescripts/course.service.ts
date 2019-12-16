import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private router:Router,private httpClient:HttpClient) { }

  getAllCourses():Observable<any>
  {
    return this.httpClient.get<any>("http://localhost:8088/course").pipe();
  }
  updateCourseDetails(studyGuide:any,courseDetails:any)
  {
    var course=courseDetails.filter(x=>x.courseName==studyGuide.courseReference.courseName)[0];
    studyGuide.courseReference.courseId=course.courseId
    studyGuide.courseReference.isActive=true;
    return studyGuide;
  } 
}
