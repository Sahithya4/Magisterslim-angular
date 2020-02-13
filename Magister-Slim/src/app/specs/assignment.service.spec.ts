import { TestBed } from '@angular/core/testing';

import { AssignmentService } from '../services/assignment.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudyguideComponent } from '../typescripts/studyguide.component';

describe('AssignmentService', () => {
  let http,router;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Router, useValue: router },{provide : HttpClient , useValue : http},{provide:StudyguideComponent} ]
  }));

  it('should be created', () => {
    const service: AssignmentService = TestBed.get(AssignmentService);
    expect(service).toBeTruthy();
  });
});
