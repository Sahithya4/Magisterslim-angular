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


const routes: Routes = [{path: '', component: LoginComponent} ,{path: 'teacher', component: TeacherComponent}, 
{path: 'student', component: StudentComponent},{path: 'studyGuide', component: StudyguideComponent},
{path: 'addstudent' , component: AddstudentComponent},{path : 'assignment', component : AssignmentComponent},
{path : 'resource' , component : ResourceComponent}, {path : 'studyGuide/:id/theme' , component : ThemeComponent},
{path : 'studyGuide/:id/theme/:id/unit' , component : UnitComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
