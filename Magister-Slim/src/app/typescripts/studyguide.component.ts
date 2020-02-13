import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StudyGuideService } from "../services/study-guide.service";
import { FormBuilder, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { OfferingService } from "../services/offering.service";
import { OfferinglevelService } from "../services/offeringlevel.service";
import { ToastrService } from "ngx-toastr";
import { CourseService } from "../services/course.service";

@Component({
  selector: "app-studyguide",
  templateUrl: "../partial/studyguide.component.html",
  styleUrls: ["../css/studyguide.component.css"]
})
export class StudyguideComponent implements OnInit {
  today = new Date();
  viewLists: any;
  courseDetails: any;
  static studyGuide: any;
  offeringLevels: any;
  offeringLevel: any;
  offerings: any;
  offering: any;
  selectedOffering: any;
  selectedOfferingLevel: any;
  selectedGroup: any;
  groupDetails: any;
  list: any;
  selectedStartDate: any;
  courses: any;
  lists: any;
  course: any;

  constructor(
    private router: Router,
    private studyGuideService: StudyGuideService,
    private formBuilder: FormBuilder,
    private offeringService: OfferingService,
    private courseService: CourseService,
    private offeringLevelService: OfferinglevelService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.studyGuideService.viewStudyGuide().subscribe(data => {
      this.viewLists = data;
      if (this.viewLists == null) this.viewLists = [];
      this.lists = data;
    });
    this.courseService.getAllCourses().subscribe(data => {
      this.courses = data;
      if (this.courses == null) this.courses = [];
      console.log(this.courses);
      this.course = this.courses;
    });
    // this.offeringService.getOfferingsList().subscribe(data => {
    //   this.offerings = data;
    // });
  }
  studyGuideDetails = this.formBuilder.group({
    studyGuideName: ["", Validators.required],
    offeringReference: [],
    offeringLevelReference: [],
    courseReference: [],
    validOnwards: [, Validators.required],
    validUpto: [, Validators.required]
  });
  createStudyGuide() {
    var studyGuide = this.studyGuideDetails.value;
    console.log(studyGuide);
    this.studyGuideService
      .recordStudyGuideDetails(studyGuide)
      .subscribe(data => {
        console.log(data);
        this.viewLists.push(data);
      });
    this.toastrService.success("Studyguide Created...!", "Success");
  }
  // myFilter(event){
  //   var filter=event.target.value.toUpperCase();
  // }
  onCheck(selectedCourse, checks) {
    this.lists = this.viewLists;
    this.list = [];
    this.list = this.viewLists.filter(
      list => list.courseReference.courseId == selectedCourse.courseId
    );
    this.lists = this.list;
    if (checks.checked == true) {
      this.courses = [];
      this.courses.push(selectedCourse);
    }
    if (checks.checked == false) {
      this.courses = this.course;
      this.lists = this.viewLists;
    }
  }
  setStartDate(startDate) {
    this.selectedStartDate = startDate;
  }
  onStudyGuide(lists) {
    StudyguideComponent.studyGuide = lists;
    this.router.navigateByUrl("studyGuide/" + lists.studyGuideId + "/theme");
  }
  setOfferingLevels(offering) {
    if (
      this.offering != "" &&
      offering != "default" &&
      offering != null &&
      this.studyGuideDetails != null
    ) {
      this.offeringLevels = offering.offeringLevelReferences;
      this.selectedOffering = offering;
    } else {
      this.offeringLevels = [];
      this.selectedOffering = null;
    }
  }
  setGroupDetails(offeringLevel) {
    if (offeringLevel != "default" && this.selectedOffering != null) {
      this.offeringLevelService
        .getOfferingLevelDetails(
          this.selectedOffering.offeringId,
          offeringLevel.offeringLevelId
        )
        .subscribe(data => {
          if (data != null) {
            offeringLevel = data;
            this.groupDetails = offeringLevel.groupReferences;
            this.selectedOfferingLevel = offeringLevel;
          }
        });
    } else {
      this.groupDetails = [];
      this.selectedOfferingLevel = null;
    }
    return;
  }
  setCourseDetails(offeringLevel) {
    this.selectedOfferingLevel = offeringLevel;
    if (
      offeringLevel != "default" &&
      this.selectedOffering != null &&
      this.selectedOfferingLevel != null
    ) {
      this.offeringLevelService
        .getOfferingLevelDetails(
          this.selectedOffering.offeringId,
          offeringLevel.offeringLevelId
        )
        .subscribe(data => {
          if (data != null) {
            offeringLevel = data;
            console.log(data);
            this.courseDetails = offeringLevel.courseReferences;
            this.selectedOfferingLevel = offeringLevel;
          }
        });
    } else {
      this.groupDetails = [];
      this.selectedOfferingLevel = null;
    }
    return;
  }
  getAllDetails() {
    this.offeringService.getOfferingsList().subscribe(data => {
      this.offerings = data;
    });
    this.studyGuideDetails.reset();
  }
  deleteStudyGuide() {
    console.log(this.list);
    this.studyGuideService
      .deleteStudyGuide(this.list.studyGuideId)
      .subscribe(data => {
        console.log(data);
        this.lists = this.viewLists.filter(
          list => list.studyGuideId !== this.list.studyGuideId
        );
      });
    this.toastrService.success("StudyGuide Deleted...!", "Success");
  }
  onClick(lists) {
    this.list = lists;
  }
  showToastrMessage() {}
}
