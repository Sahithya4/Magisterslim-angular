import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { LoginComponent } from '../typescripts/login.component';
import { TeacherComponent } from '../typescripts/teacher.component';
import { StudentComponent } from '../typescripts/student.component';
import { AppComponent } from '../typescripts/app.component';
import { AddstudentComponent } from '../typescripts/addstudent.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherComponent,
    StudentComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
