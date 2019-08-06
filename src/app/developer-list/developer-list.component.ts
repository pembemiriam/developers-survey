import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../shared/developer.service'
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Role } from '../developer/developer.component';


export interface PeriodicElement {
  name: string;
  firstName: string;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {
developerArray = [];
developers:any;
displayedColumns: string[] = ['firstName', 'lastName', 'role', 'birthDate', 'action'];
dataSource: MatTableDataSource<any>;
showForm : boolean;
developerDetails: any;
submitted: any;

roles: Role[] = [
  {value: 'Frontend developer', viewValue: 'Frontend developer'},
  {value: 'Backend developer', viewValue: 'Backend developer'},
  {value: 'Fullstack', viewValue: 'Fullstack'},
  {value: 'Other', viewValue: 'Other'},

];
  constructor(public developerService: DeveloperService, private router: Router) { }

  ngOnInit() {
    this.showForm = false;

    this.developerService.getDevelopers().subscribe(
      // (res) => {
      //   this.developers = res;
      //   console.log(this.developers);
      //}
      list => {
        this.developerArray = list.map( item => {
          return {
            $key: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
        console.log(this.developerArray);
        this.dataSource = new MatTableDataSource(this.developerArray);
        for (var developer of this.developerArray) {
          if(developer.role == 'Other'){
            developer.role = developer.roleSpecification;
          }
        }

      }
    );


  }
  deleteDeveloper(data){
    console.log(data);
    if(confirm('Are you sure you want to delete this record?')){
      this.developerService.deleteDeveloper(data);
    }

  }

  applyFilter(filterValue: string) {
   // console.log(this.developers);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  populateForm(developer){
    this.showForm = true;
    this.developerService.populateForm(developer);



  }

  addDeveloper(){
    this.router.navigate(['developer']);
  }

  viewDeveloper() {
    this.showForm = false;
  }

  viewReport(){
    this.router.navigate(['report']);
  }onSubmit(){
    console.log("hello");
    console.log(this.developerService.myForm.value);
  
    this.submitted = true;
  //  if (this.developerService.myForm.valid){
      console.log('valid');
      if (this.developerService.myForm.get('$key').value == null){
        console.log('true');
        this.developerService.insertDeveloper(this.developerService.myForm.value);
        this.router.navigateByUrl('developer-list');
      }else{
        console.log("this is else");
        this.developerService.updateDeveloper(this.developerService.myForm.value);
  this.showForm = false;
      }
   // }
    
   
  this.submitted = false;
  this.developerService.myForm.reset();
  
   }


}
