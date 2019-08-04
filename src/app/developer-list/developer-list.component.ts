import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../shared/developer.service'
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

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
  constructor(private developerService: DeveloperService, private router: Router) { }

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

  viewReport(){
    this.router.navigate(['report']);
  }

}
