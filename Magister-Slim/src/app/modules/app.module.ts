import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {ToastrModule} from 'ngx-toastr'
import {FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
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
import {TokenInterceptorService} from '../services/token-interceptor.service'
import {CookieService} from 'ngx-cookie-service';
import { GroupComponent } from '../typescripts/group.component';
import { OfferingComponent } from '../typescripts/offering.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { MatDividerModule, MatCheckboxModule } from '@angular/material';
import { MydialogComponent } from '../typescripts/mydialog.component';
import { OfferinglevelComponent } from '../typescripts/offeringlevel.component';
import { CourseComponent } from '../typescripts/course.component';
import { NgMaterial2FacetSearchModule } from 'ng-material2-facet-search';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    UnitComponent,
    GroupComponent,
    OfferingComponent,
    MydialogComponent,
    OfferinglevelComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatDialogModule,
    NgMaterial2FacetSearchModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule, BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-center',
      preventDuplicates:true,
      closeButton:true,
      onActivateTick:true,
      progressBar:true
      })
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  },CookieService],
  bootstrap: [AppComponent],
  entryComponents: [
    MydialogComponent
  ]
})
export class AppModule { }
