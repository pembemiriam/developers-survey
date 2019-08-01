import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../shared/developer.service'
import { MatTableDataSource } from '@angular/material';

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

developers: any;
displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'role', 'roleSpecification', 'resume', 'action'];
dataSource: MatTableDataSource<any>;
  constructor(private developerService: DeveloperService) { }

  ngOnInit() {

    this.developerService.getDevelopers().subscribe(
      (res) => {
        this.developers = res;
        console.log(this.developers);
      }
    );

  }
  deleteDeveloper(data){
    console.log(data);
      this.developerService.deleteDeveloper(data);

  }

}
