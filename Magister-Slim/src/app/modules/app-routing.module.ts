import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from '../typescripts/login.component';
import { TeacherComponent } from '../typescripts/teacher.component';
import { StudentComponent } from '../typescripts/student.component';


const routes: Routes = [{path: '', component: LoginComponent} ,{path: 'teacher', component: TeacherComponent}, 
{path: 'student', component: StudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
