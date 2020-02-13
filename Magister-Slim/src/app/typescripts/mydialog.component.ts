import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-mydialog',
  templateUrl: '../partial/mydialog.component.html',
  styleUrls: ['../css/mydialog.component.css']
})
export class MydialogComponent implements OnInit {

  constructor() {
    }

  ngOnInit() {
  }

}
