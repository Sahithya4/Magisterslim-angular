import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: '../partial/addstudent.component.html',
  styleUrls: ['../css/addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private router :Router,private formBuilder: FormBuilder,private studentService :StudentService ) { }

  ngOnInit() {
  }

  studentDetails = this.formBuilder.group({
    name: ['',Validators.required],
    gender : ['',Validators.required],
    phoneno: [,Validators.required],
    active: [true]
  });

  createStudent()
  {
    var student=this.studentDetails.value;
    console.log(student)
    this.studentService.insertData(student).subscribe(data => console.log(data)); 
    this.reset();
  }
  reset() {
    this.studentDetails.reset();
  }
}
