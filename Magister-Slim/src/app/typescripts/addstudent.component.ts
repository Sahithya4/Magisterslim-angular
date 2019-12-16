import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: '../partial/addstudent.component.html',
  styleUrls: ['../css/addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private router :Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  studentDetails = this.formBuilder.group({
    id: [,Validators.required],
    name: ['',Validators.required],
    gender : ['',Validators.required],
    phoneno: [,Validators.required],
    active: [true]
  });

  createStudent()
  {
    var student=this.studentDetails.value;
    console.log(student)
 //   this.studyGuideService.insertData(student).subscribe(data => console.log(data)); 
  }
}
