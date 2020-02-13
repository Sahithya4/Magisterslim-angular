import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { AssignmentService } from "../services/assignment.service";
import { StudyguideComponent } from "./studyguide.component";
import { UnitComponent } from "./unit.component";

@Component({
  selector: "app-assignment",
  templateUrl: "../partial/assignment.component.html",
  styleUrls: ["../css/assignment.component.css"]
})
export class AssignmentComponent implements OnInit {
  viewLists: any[] = [];
  studyGuide: any;
  theme: any;
  unit: any;
  selectedStartDate: any;

  constructor(
    private router: Router,
    private assignmentService: AssignmentService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.studyGuide = StudyguideComponent.studyGuide;
    this.theme = UnitComponent.theme;
    this.route.params.subscribe(params => {
      this.unit = params;
    });
    this.assignmentService
      .viewAssignment(this.studyGuide.studyGuideId, this.theme.id, this.unit.id)
      .subscribe(data => {
        console.log(data);
        if (data[0] != null) this.viewLists = data;
      });
  }
  assignmentDetails = this.formBuilder.group({
    assignmentName: ["", Validators.required],
    validOnwards: [, Validators.required],
    validUpto: [, Validators.required]
  });
  setStartDate(startDate) {
    this.selectedStartDate = startDate;
  }
  createAssignment() {
    console.log(this.assignmentDetails.value);
    this.assignmentService
      .createAssignment(
        this.studyGuide.studyGuideId,
        this.theme.id,
        this.unit.id,
        this.assignmentDetails.value
      )
      .subscribe(data => {
        console.log(data);
        if (this.viewLists != null) this.viewLists.push(data);
        else this.viewLists = data;
      });
  }
}
