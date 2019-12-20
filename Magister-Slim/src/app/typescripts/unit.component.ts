import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitService } from '../services/unit.service';
import { StudyguideComponent } from './studyguide.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-unit',
  templateUrl: '../partial/unit.component.html',
  styleUrls: ['../css/unit.component.css']
})
export class UnitComponent implements OnInit {

  studyGuide :any
  theme :any
  units :any

  constructor(private route : ActivatedRoute,private router :Router,private unitService : UnitService,private themeService : ThemeService) { 
    this.studyGuide=StudyguideComponent.studyGuide
    this.route.params.subscribe( params =>{
      this.themeService.findTheme(params.id,this.studyGuide).subscribe(data=>{console.log(data);this.updatedata(data);
      });
    });
  }

  ngOnInit() {
  }
  updatedata(data)
  {
    this.units=data.units
    if(this.units==null)
    {
      this.units=[];
    }
  }

}
