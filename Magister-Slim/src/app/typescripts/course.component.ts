import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "../services/course.service";
import { OfferinglevelService } from "../services/offeringlevel.service";
import { FormBuilder, Validators } from "@angular/forms";
import { OfferingComponent } from "./offering.component";

@Component({
  selector: "app-course",
  templateUrl: "../partial/course.component.html",
  styleUrls: ["../css/course.component.css"]
})
export class CourseComponent implements OnInit {
  offering: any;
  offeringlevel: any;
  courses: any[];
  list: any;
  paramsId: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private offeringlevelService: OfferinglevelService,
    private formBuilder: FormBuilder
  ) {
    this.offering = OfferingComponent.offering;
    this.route.params.subscribe(params => {
      this.paramsId = params.id;
      this.offeringlevelService
        .findOfferinglevel(params.id, this.offering.offeringId)
        .subscribe(data => {
          this.updatedata(data);
        });
    });
  }

  courseDetails = this.formBuilder.group({
    courseName: ["", Validators.required]
  });

  ngOnInit() {}
  updatedata(data) {
    if (data.courseReferences != null)
      this.courses = data.courseReferences.filter(
        course => course.active != false
      );
    else this.courses = [];
    if (this.courses != null && this.courses.length < 0) {
      this.courses = [];
    }
  }
  onClick(lists) {
    this.list = lists;
  }
  createCourse() {
    var course = this.courseDetails.value;
    this.courseService
      .createCourse(this.offering.offeringId, this.paramsId, course)
      .subscribe(data => {
        console.log("data is:" + data);
        if (this.courses != null) this.courses.push(data);
        else this.courses = data;
      });
  }
  deleteCourse() {
    this.courseService
      .deleteCourse(this.offering.offeringId, this.paramsId, this.list.courseId)
      .subscribe(data => {
        console.log(data);
        this.courses = this.courses.filter(
          list => list.courseId !== this.list.courseId
        );
      });
  }
}
