// This is a static widget. Look at the other widgets for how to properly fetch and map json to models
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue-stream-static',
  templateUrl: './revenue-stream-static.component.html',
  styleUrls: ['./revenue-stream-static.component.scss']
})
export class RevenueStreamStaticComponent implements OnInit {

  data:any;
  options:any;
  constructor() { }

  ngOnInit(): void {
    this.setOptions();
    this.loadData();
  }

  setOptions(){
    this.options = {
      responsive:true,
      cutout:"70%",
      radius:"80%",
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      plugins: {
          legend: {
            display:true,
            position:'bottom',
            labels: {
              color: '#ababab',
              usePointStyle: true,
              boxWidth: 10,
            }
          }
      },
    };
  }
  loadData(){
    this.data = {
      labels: ['Online','Retail','N/A'],
      datasets: [
          {
              data: [12,32,56],
              backgroundColor: [
                "#52a2f5",
                "#5c979b",
                "#e4e7eb"
            ],
          }
      ]
    };
    // this.data[0].datasets[0].backgroundColor = this.style.getPropertyValue(this.colorVar);;
  }
}
