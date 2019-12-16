import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: '../partial/resource.component.html',
  styleUrls: ['../css/resource.component.css']
})
export class ResourceComponent implements OnInit {
  viewLists: any;

  constructor(private router :Router,private resourceService : ResourceService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resourceService.viewResource().subscribe(data=>{console.log(data);this.updatedata(data);
    });
  }

  resourceDetails = this.formBuilder.group({
    resourceId: [,Validators.required],
    resourceName: ['',Validators.required],
    resourceType : ['',Validators.required],
    active: [true]
  })
  createResource()
  {
    var resource=this.resourceDetails.value;
    console.log(resource)
    this.resourceService.insertData(resource).subscribe(data => console.log(data)); 
    this.resourceService.viewResource().subscribe(data=>{console.log(data);this.updatedata(data);
    });
  }
  updatedata(data)
  {
    this.viewLists=data
  }

}
