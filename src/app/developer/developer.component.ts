import { Component, OnInit } from '@angular/core';
import { DeveloperService} from '../shared/developer.service'

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  submitted : boolean;
  formControls = this.developerService.myForm.controls;

  constructor(private developerService : DeveloperService) { }

  ngOnInit() {
  }

onSubmit(){
  console.log("hello");
  console.log(this.developerService.myForm.value);

  this.submitted = true;
  
    this.developerService.insertDeveloper(this.developerService.myForm.value);
 
this.submitted = false;
 }

}
