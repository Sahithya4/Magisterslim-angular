import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AssignmentService } from '../services/assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: '../partial/assignment.component.html',
  styleUrls: ['../css/assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private router :Router,private assignmentService : AssignmentService,private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
