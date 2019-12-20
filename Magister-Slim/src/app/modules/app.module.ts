import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { LoginComponent } from '../typescripts/login.component';
import { TeacherComponent } from '../typescripts/teacher.component';
import { StudentComponent } from '../typescripts/student.component';
import { AppComponent } from '../typescripts/app.component';
import { AddstudentComponent } from '../typescripts/addstudent.component';
import { StudyguideComponent } from '../typescripts/studyguide.component';
import { AssignmentComponent } from '../typescripts/assignment.component';
import { ResourceComponent } from '../typescripts/resource.component';
import { ThemeComponent } from '../typescripts/theme.component';
import { UnitComponent } from '../typescripts/unit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherComponent,
    StudentComponent,
    AddstudentComponent,
    StudyguideComponent,
    AssignmentComponent,
    ResourceComponent,
    ThemeComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
