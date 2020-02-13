import { Component, OnInit } from "@angular/core";
import {  Router } from "@angular/router";
import { OfferinglevelService } from "../services/offeringlevel.service";
import { FormBuilder, Validators } from "@angular/forms";
import { OfferingComponent } from "./offering.component";

@Component({
  selector: "app-offeringlevel",
  templateUrl: "../partial/offeringlevel.component.html",
  styleUrls: ["../css/offeringlevel.component.css"]
})
export class OfferinglevelComponent implements OnInit {
  offering: any;
  offeringLevels: any[];
  offeringLevel: any;
  list: any;

  constructor(
    private offeringlevelService: OfferinglevelService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  offeringLevelDetails = this.formBuilder.group({
    offeringLevelName: ["", Validators.required]
  });

  createOfferingLevel() {
    var offeringLevel = this.offeringLevelDetails.value;
    this.offeringlevelService
      .createOfferingLevel(this.offering.offeringId, offeringLevel)
      .subscribe(data => {
        console.log(data);
        if (this.offeringLevels != null) {
          this.offeringLevels.push(data);
          OfferingComponent.offering.offeringLevelReferences = this.offeringLevels;
        } else {
          OfferingComponent.offering.offeringLevelReferences = data;
          this.offeringLevels = data;
        }
      });
  }

  ngOnInit() {
    this.offering = OfferingComponent.offering;
    if (this.offering.offeringLevelReferences != null)
      this.offeringLevels = this.offering.offeringLevelReferences.filter(
        offeringLevel => offeringLevel.active != false
      );
    console.log("offering Levels is:" + this.offering.offeringLevelReferences);
    if (this.offeringLevels != null && this.offeringLevels.length > 0)
      this.offeringlevelService
        .findOfferinglevel(
          this.offeringLevels[0].offeringLevelId,
          this.offering.offeringId
        )
        .subscribe(data => {
          this.updatedata(data);
        });
    if (this.offeringLevels == null) this.offeringLevels = [];
  }

  reset() {
    this.offeringLevelDetails.reset();
  }

  onCourse(course) {
    console.log("course is" + course);
    // this.router.navigate(["offering/"+this.offering.offeringId+"/offering-level/"+this.offeringLevel[0].offeringLevelId+"/course"])
  }

  onClick(lists) {
    this.list = lists;
    console.log(this.list);
  }
  deleteOfferingLevel() {
    console.log(this.list);
    this.offeringlevelService
      .deleteOfferingLevel(this.offering.offeringId, this.list.offeringLevelId)
      .subscribe(data => {
        console.log(data);
        if (data.active == false) {
          this.offeringLevels = this.offeringLevels.filter(
            offeringLevel =>
              offeringLevel.offeringLevelId != this.list.offeringLevelId
          );
          OfferingComponent.offering.offeringLevelReferences = this.offeringLevels;
          if (this.offeringLevels != null && this.offeringLevels.length > 1)
            this.router.navigate([
              "offering/" +
                this.offering.offeringId +
                "/offering-level/" +
                this.offeringLevels[this.offeringLevels.length - 1]
                  .offeringLevelId +
                "/course"
            ]);
          else
            this.router.navigate([
              "offering/" + this.offering.offeringId + "/offering-level/"
            ]);
        }
      });
  }
  updatedata(data) {
    console.log("data is" + data);
    this.router.navigate([
      "offering/" +
        this.offering.offeringId +
        "/offering-level/" +
        this.offeringLevels[0].offeringLevelId +
        "/course"
    ]);
  }
}
