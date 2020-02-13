import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ResourceService } from "../services/resource.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MydialogComponent } from "../typescripts/mydialog.component";
import { StudyGuideService } from "../services/study-guide.service";
import { ThemeService } from "../services/theme.service";
import { ToastrService } from 'ngx-toastr';
// import { ConfirmDialogModel, ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: "app-resource",
  templateUrl: "../partial/resource.component.html",
  styleUrls: ["../css/resource.component.css"]
})
export class ResourceComponent implements OnInit {
  viewLists: any[];
  list: any;
  studyguides: any[];
  themes: any[];
  selectedStudyGuide: any;
  units: any[];
  selectedTheme: any;

  constructor(
    private router: Router,
    private resourceService: ResourceService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private toastrService:ToastrService
  ) {}

  ngOnInit() {
    this.resourceService.viewResource().subscribe(data => {
      console.log(data);
      this.updatedata(data);
    });
  }
  openModal(lists) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 4,
      title: "Delete"
    };
    const dialogRef = this.dialog.open(MydialogComponent, {height: '600px',
    width: '600px'});
    dialogRef.afterClosed().subscribe(result => {
      
      console.log("Dialog was closed");
      if (result == true) this.deleteResource(lists);
    });
  }

  resourceDetails = this.formBuilder.group({
    resourceName: ["", Validators.required],
    resourceType: ["", Validators.required],
    resourceDescription: ["", Validators.required]
  });
  createResource() {
    var resource = this.resourceDetails.value;
    this.resourceService.insertData(resource).subscribe(data => {console.log(data)
      if(this.viewLists!=null)
      this.viewLists.push(data);
      else
      this.viewLists=data;
    });
    this.toastrService.success("Resource Created...!","Success");
  }
  updatedata(data) {
    this.viewLists = data;
  }
  onClick(lists) {
    this.list = lists;
  }
  deleteResource(resource) {
    this.resourceService.deleteResource(resource).subscribe(data => {
      console.log(this.viewLists);
      this.viewLists = this.viewLists.filter(list => list.resourceId != resource.resourceId);
    });
  }
}
