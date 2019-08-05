import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js'
import { DeveloperService } from '../shared/developer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  developerArray = [];
  frontendCount = 0;
  backendCount = 0;
  fullstackCount = 0;
  otherCount = 0;
  lineChart: any;
  barChart: any;
  ctx: any;

  constructor(private developerService: DeveloperService, private elementRef: ElementRef, private router: Router) { }

  ngOnInit() {

    this.developerService.getDevelopers().subscribe(
      // (res) => {
      //   this.developers = res;
      //   console.log(this.developers);
      //}
      list => {
        this.developerArray = list.map(item => {
          return {
            $key: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
        console.log(this.developerArray);
        for (var developer of this.developerArray) {
          console.log("this is for" + developer);
          switch (developer.role) {
            case 'Frontend developer':
              this.frontendCount++
              console.log("this is for" + this.frontendCount
              );

              break;
            case 'Backend developer':
              this.backendCount++
              break;
            case 'Fullstack':
              this.fullstackCount++
              break;
            case 'Other':
              this.otherCount++
              break;
          }
        }

       // this.drawLine();
        this.drawBar();



      }
    );



  }

  drawLine() {

    this.lineChart = new Chart(
      'lineChart', {
        type: 'line',
        data: {
          labels: ["Frontend", "Backend", "Fullstack", "Other"],
          datasets: [{
            label: 'Number of developers per role',
            // data: [this.frontendCount, this.backendCount, this.fullstackCount, this.otherCount],
            data: [this.frontendCount, this.backendCount, this.fullstackCount, this.otherCount],
            fill: false,
            lineTension: 0.2,
            borderColor: 'red',
            borderWidth: 1
          }]

        },
        options: {
          title: {
            text: "Line Chart",
            display: true
          },
          scales: {

            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

  }

  drawBar() {

    this.barChart = new Chart(
      'barChart', {
        type: 'bar',
        data: {
          labels: ["Frontend", "Backend", "Fullstack", "Other"],
          datasets: [{
            label: 'Number of developers per role',
            //data: [5, 6, 3, 9],
            data: [this.frontendCount, this.backendCount, this.fullstackCount, this.otherCount],
            backgroundColor: [
              'rgba(255, 99, 122, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',],
            borderColor: ['rgba(255, 99, 122, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',],
            borderWidth: 1
          }]

        },
        options: {
          title: {
            text: "Bar Chart",
            display: true
          },
          scales: {

            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });


  }

  viewDeveloper() {
    this.router.navigate(['developer-list']);
  }

}
