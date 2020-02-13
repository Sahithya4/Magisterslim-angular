import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UnitService } from "../services/unit.service";
import { StudyguideComponent } from "./studyguide.component";
import { ThemeService } from "../services/theme.service";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ResourceService } from '../services/resource.service';

@Component({
  selector: "app-unit",
  templateUrl: "../partial/unit.component.html",
  styleUrls: ["../css/unit.component.css"]
})
export class UnitComponent implements OnInit {
  studyGuide: any;
  static theme: any;
  units: any[];
  list: any;
  resources: any;
  resource: any;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private unitService: UnitService,
    private themeService: ThemeService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private resourceService : ResourceService
  ) {
    this.studyGuide = StudyguideComponent.studyGuide;
    this.route.params.subscribe(params => {
      this.themeService
        .findTheme(params.id, this.studyGuide)
        .subscribe(data => {
          this.updatedata(data);
        });
    });
  }
  unitDetails = this.formBuilder.group({
    unitName: ["", Validators.required],
    unitDescription: [, Validators.required],
    unitGoal: [, Validators.required]
  });
  resourceDetails = this.formBuilder.group({
    resource: ["", Validators.required]
  });

  ngOnInit() {
    this.route.params.subscribe(params => (UnitComponent.theme = params));
  }
  updatedata(data) {
    if (data.units != null)
      this.units = data.units.filter(unit => unit.active == true);
    else this.units = [];
    if (this.units == null) {
      this.units = [];
    }
  }
  reset() {
    this.unitDetails.reset();
  }
  onUnits(lists) {
    this.route.params.subscribe(params => {
    this.router.navigate(['studyGuide/'+this.studyGuide.studyGuideId+'/theme/'+params.id+'/unit/'+lists.unitId]);
    });
  }
  onClick(lists) {
    this.list = lists;
    console.log(this.list);
  }
  createUnit() {
    var unit = this.unitDetails.value;
    this.unitService
      .insertData(this.studyGuide.studyGuideId, UnitComponent.theme.id, unit)
      .subscribe(data => {
        console.log(data);
        if (this.units != null) this.units.push(data);
        else this.units = data;
      });
    this.toastrService.success("Unit Created...!", "Success");
  }
  deleteUnits() {
    console.log(this.list);
    this.unitService
      .deleteUnit(this.studyGuide.studyGuideId, UnitComponent.theme.id, this.list.unitId)
      .subscribe(data => {
        console.log(data);
        this.units = this.units.filter(list => list.unitId != this.list.unitId);
        this.toastrService.success("Unit Deleted...!", "Success");
      });
  }
  viewResources(){
    this.resourceService.viewResource().subscribe(data=>this.resources=data)
    this.resourceDetails.reset();
  }
  addResource(){
    this.resource=this.resourceDetails.value;
    console.log(this.resource.resource)
    this.unitService.addResource(this.studyGuide.studyGuideId,UnitComponent.theme.id,this.list.unitId,this.resource.resource).subscribe(data=>{console.log(data)})
  }
}
