import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../shared/developer.service'

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  constructor(private developerService: DeveloperService) { }

  ngOnInit() {

    this.developerService.getDevelopers();
  }

}
