import { Component, OnInit } from '@angular/core';
import { OfferingService } from '../services/offering.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offering',
  templateUrl: '../partial/offering.component.html',
  styleUrls: ['../css/offering.component.css']
})
export class OfferingComponent implements OnInit {

  constructor(private router: Router,private offeringService:OfferingService,private formBuilder:FormBuilder) { }
  offeringList:any=[]
  static offering:any;
  list:any
  ngOnInit() {
    this.offeringService.getOfferingsList().subscribe(data=>{
      console.log(data)
      this.offeringList=data
    })
  }
  offeringDetails=this.formBuilder.group({
    offeringName:[,Validators.required]
  })

  createOffering()
  {
    var offering=this.offeringDetails.value
    this.offeringService.createOffering(offering).subscribe(data=>{
      this.offeringList.push(data)
    }
    )
  }
  onOffering(offering)
  {
    OfferingComponent.offering = offering;
    this.router.navigateByUrl("offering/" + offering.offeringId + "/offering-level");
  }
  reset()
  {
    this.offeringDetails.reset()
  }
  onClick(lists)
  {
    this.list=lists;
  }
  deleteOffering()
  {
    console.log(this.list);
    this.offeringService.deleteOffering(this.list.offeringId).subscribe(data=>{
      if(data!=null)
      {
        this.offeringList=this.offeringList.filter(offering=>offering.offeringId!=data.offeringId);
      }
    })
  }

}
