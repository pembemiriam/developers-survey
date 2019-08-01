import { Component, OnInit } from '@angular/core';
import { DeveloperService} from '../shared/developer.service'

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  submitted : boolean;
  showSuccessMessage: boolean;
  formControls = this.developerService.myForm.controls;

  constructor(private developerService : DeveloperService) { }

  ngOnInit() {
  }

onSubmit(){
  console.log("hello");
  console.log(this.developerService.myForm.value);

  this.submitted = true;
  if (this.developerService.myForm.valid){
    if (this.developerService.myForm.get('$key').value == null){
      this.developerService.insertDeveloper(this.developerService.myForm.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000)
    }
  }
  
 
this.submitted = false;
this.developerService.myForm.reset();
 }

}
