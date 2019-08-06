import { Component, OnInit } from '@angular/core';
import { DeveloperService} from '../shared/developer.service';
import { Router } from '@angular/router';

export interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  submitted : boolean;
  showSuccessMessage: boolean;
  formControls = this.developerService.myForm.controls;

  roles: Role[] = [
    {value: 'Frontend developer', viewValue: 'Frontend developer'},
    {value: 'Backend developer', viewValue: 'Backend developer'},
    {value: 'Fullstack', viewValue: 'Fullstack'},
    {value: 'Other', viewValue: 'Other'},

  ];

  constructor(public developerService : DeveloperService, private router: Router) { }

  ngOnInit() {
  }

onSubmit(){
  console.log("hello");
  console.log(this.developerService.myForm.value);

  this.submitted = true;
//  if (this.developerService.myForm.valid){
    console.log('valid');
    if (this.developerService.myForm.get('$key').value == null){
      console.log('true');
      this.developerService.insertDeveloper(this.developerService.myForm.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 2000)
      this.router.navigateByUrl('developer-list');
    }else{
      console.log("this is else");
      this.developerService.updateDeveloper(this.developerService.myForm.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 2000)
this.router.navigateByUrl('developer-list');
    }
 // }
  
 
this.submitted = false;
this.developerService.myForm.reset();
this.router.navigateByUrl('');

 }

 viewDeveloper() {
   this.router.navigate(['developer-list']);
 }

}
