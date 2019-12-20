import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyguideComponent } from './studyguide.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: '../partial/theme.component.html',
  styleUrls: ['../css/theme.component.css']
})
export class ThemeComponent implements OnInit {

  studyGuide :any
  themes :any
  theme :any

  constructor(private route: ActivatedRoute,private themeService : ThemeService,private router : Router) { 
  }

  ngOnInit() {
    this.studyGuide=StudyguideComponent.studyGuide;
    this.themes=this.studyGuide.themes;
    this.themeService.findTheme(this.themes[0].themeId,this.studyGuide).subscribe(data=>{console.log(data);this.updatedata(data);
    });
  }

  onUnits(theme)
  {
    console.log(theme)
    this.themeService.findTheme(theme.themeId,this.studyGuide).subscribe(data=>{console.log(data);this.updatedata(data);
    });
  }
  updatedata(data)
  {
    this.theme=data
    this.router.navigate(["studyGuide/"+this.studyGuide.studyGuideId+"/theme/"+this.theme.themeId+"/unit"])
  }
}
