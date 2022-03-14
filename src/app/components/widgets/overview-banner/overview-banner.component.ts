import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-banner',
  templateUrl: './overview-banner.component.html',
  styleUrls: ['./overview-banner.component.scss']
})
export class OverviewBannerComponent implements OnInit {
  @Input() colorVar: string = "";
  @Input() title: string = "";
  @Input() counts:any = [];
  @Input() icon: string = "";
  data:any = [];
  options:any;
  style:any;
  sample = [22, 31, 42, 33, 27, 42, 
    45, 29, 31, 38, 22, 31, 42, 
    23, 27, 22, 25, 29, 31, 38];

  constructor() { }

  ngOnInit(): void {
    this.init();
    this.setOptions();
    this.loadData();
  }

  init(){
    this.style = getComputedStyle(document.body);
  }
  setOptions(){
    this.options = {
      plugins: {
          legend: {
            display:false,
          }
      },
      scales: {
          x: {
              display:false,
          },
          y: {
            display:false,
          }
      }
    };
  }
  loadData(){
    this.data.push({
      labels: [],
      datasets: [
          {
              data: this.shuffle(),
              fill: true,
              borderWidth:0,
              tension: .3,
              backgroundColor: '',
              pointRadius: 0
          }
      ]
    });
    this.data[0].labels = Array(...Array(20).keys());
    this.data[0].datasets[0].backgroundColor = this.style.getPropertyValue(this.colorVar);;
    this.data.push({
      labels: [],
      datasets: [
          {
              data: this.shuffle(),
              fill: true,
              borderWidth:0,
              tension: .3,
              backgroundColor: '',
              pointRadius: 0
          }
      ]
    });
    this.data[1].labels = Array(...Array(20).keys());
    this.data[1].datasets[0].backgroundColor = this.style.getPropertyValue(this.colorVar);;

  }
  shuffle(){
    return this.sample
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  }
}
