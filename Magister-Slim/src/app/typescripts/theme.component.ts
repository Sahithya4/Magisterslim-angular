import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: '../partial/theme.component.html',
  styleUrls: ['../css/theme.component.css']
})
export class ThemeComponent implements OnInit {
 
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( params => console.log(params));
  }

  ngOnInit() {
  }

}
