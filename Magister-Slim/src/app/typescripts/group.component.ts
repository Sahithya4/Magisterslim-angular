import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GroupService } from "../services/group.service";
import { FormBuilder, Validators } from "@angular/forms";
import { CourseService } from "../services/course.service";
import { OfferinglevelService } from "../services/offeringlevel.service";
import { OfferingService } from "../services/offering.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-group",
  templateUrl: "../partial/group.component.html",
  styleUrls: ["../css/group.component.css"]
})
export class GroupComponent implements OnInit {
  viewLists: any;
  courseList: any;
  list: any;

  constructor(
    private groupService: GroupService,
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private offeringService: OfferingService,
    private toastrService: ToastrService,
    private offeringLevelService: OfferinglevelService
  ) {}

  groupDetails = this.formBuilder.group({
    groupName: ["", Validators.required],
    courseReference: [, Validators.required]
  });

  ngOnInit() {
    this.groupService.getAllGroups().subscribe(data => {
      this.viewLists = data;
      if (this.viewLists == null) this.viewLists = [];
    });
  }

  updatedata(data) {
    this.viewLists = data;
  }
  getCourseDetails() {
    this.courseService.getAllCourses().subscribe(data => {
      console.log(data);
      this.courseList = data;
    });
  }
  onClick(list) {
    this.list = list;
  }
  createGroup() {
    var group = this.groupDetails.value;
    var offeringlevelId =
      group.courseReference.offeringLevelReference.offeringLevelId;
    var offeringId;
    this.offeringLevelService
      .getOfferingLevel(offeringlevelId)
      .subscribe(data => {
        offeringId = data.offeringReference.offeringId;
        this.groupService
          .createGroup(
            offeringId,
            offeringlevelId,
            group.courseReference.courseId,
            group
          )
          .subscribe(data => {
            console.log(data);
          });
      });
  }
  deleteGroup() {
    var group = this.list;
    console.log(this.list);
    var offeringlevelId;
    this.offeringService.getOfferingsList().subscribe(data => {
      var offeringId = data.offeringReference.offeringId;
      console.log(offeringId);
      offeringlevelId = data.offeringLevelReference.offeringLevelId;
      this.groupService
        .deleteGroup(
          offeringId,
          offeringlevelId,
          group.courseReference.courseId,
          this.list
        )
        .subscribe(data => {
          console.log(data);
          this.toastrService.success("Group Deleted...!", "Success");
        });
    });
  }
}
