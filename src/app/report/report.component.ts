import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { DeveloperService } from '../shared/developer.service';

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
  constructor(private developerService: DeveloperService) { }

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


      }
    );

    for(var developer of this.developerArray) {
      console.log("this is for" +developer);
      switch (developer.role) {
        case 'Frontend developer':
          this.frontendCount++
          break;
        case 'Frontend developer':
          this.backendCount++
          break;
        case 'Frontend developer':
          this.fullstackCount++
          break;
        case 'Frontend developer':
          this.otherCount++
          break;
      }
    }

    // this.lineChart = new Chart('lineChart', {
    //   type: 'line',
    //   data: {
    //     labels: ["Frontend", "Backend", "Fullstack", "Other" ],
    //     datasets: [{
    //       label: 'Number od developers with this role',
    //      // data: [this.frontendCount, this.backendCount, this.fullstackCount, this.otherCount],
    //      data: [1,2,3,4],
    //       fill: false,
    //       lineTension:0.2,
    //       borderColor:'red',
    //       borderWidth: 1
    //     }]

    //   },
    //   options: {
    //     title:{
    //       text: "Line Chart",
    //       display: true
    //     },
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });


  }

}
