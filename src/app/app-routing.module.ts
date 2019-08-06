import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperComponent } from './developer/developer.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path : 'developer', component : DeveloperComponent},
  {path : '', component : DeveloperListComponent},
  {path : 'developer-list', component : DeveloperListComponent},
  {path : 'edit-developer', component : DeveloperListComponent},
  {path : 'report', component : ReportComponent},
  {path : 'login', component : LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
