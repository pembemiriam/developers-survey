import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  {path : '', component : DeveloperComponent},
  {path : 'developers', component : DeveloperListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
