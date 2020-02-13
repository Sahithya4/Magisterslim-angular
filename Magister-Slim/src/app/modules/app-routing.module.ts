import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from '../typescripts/login.component';
import { TeacherComponent } from '../typescripts/teacher.component';
import { StudentComponent } from '../typescripts/student.component';
import { StudyguideComponent } from '../typescripts/studyguide.component';
import { AddstudentComponent } from '../typescripts/addstudent.component';
import { AssignmentComponent } from '../typescripts/assignment.component';
import { ResourceComponent } from '../typescripts/resource.component';
import { ThemeComponent } from '../typescripts/theme.component';
import { UnitComponent } from '../typescripts/unit.component';
import { GroupComponent } from '../typescripts/group.component';
import { OfferingComponent } from '../typescripts/offering.component';
import { OfferinglevelComponent } from '../typescripts/offeringlevel.component';
import { CourseComponent } from '../typescripts/course.component';


const routes: Routes = [{path: '', component: LoginComponent} ,{path: 'teacher', component: TeacherComponent}, 
{path: 'student', component: StudentComponent},{path: 'studyGuide', component: StudyguideComponent},
{path: 'teacher/student' , component: AddstudentComponent},{path : 'assignment', component : AssignmentComponent},
{path : 'resource' , component : ResourceComponent}, {path : 'studyGuide/:id/theme' , component : ThemeComponent},
{path : 'studyGuide/:id/theme/:id/unit' , component : UnitComponent},{path : 'group' , component : GroupComponent},
{path : 'offering' , component : OfferingComponent},
{path : 'offering/:id/offering-level' , component : OfferinglevelComponent},
{path:'offering/:id/offering-level/:id/course',component:CourseComponent},
{path : 'studyGuide/:id/theme/:id/unit/:id' , component : AssignmentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
