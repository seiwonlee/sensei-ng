import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit, OnChanges {
  @Input() duration:number=7;
  selectedIndex: number = 0;
  data:any;
  sample:number[] = [22, 31, 42, 33, 27, 42, 45, 29, 31, 38, 22, 31, 42, 23, 27, 22, 25, 29, 31, 38, 29, 31, 38, 22, 31, 42, 23, 27, 22, 25, 29, 31, 38];
  options:any;
  colors = ['#9abeff','#b2bdff','#8dfff9','#93d6ff'];
  items:any;

  constructor() {}

  ngOnInit(): void {
    this.setOptions();
    this.loadData(this.selectedIndex);
    this.setUISample();

  }
  setUISample(){
    this.items = [
      {
        title:"New", 
        icon:"pi-plus-circle", 
        detail:{count: 182, 
          stats:[
            {title:'Online',count:170},{title:'POS',count:12}
          ]
        }
      },
      {
        title:"Completed", 
        icon:"pi-check-circle", 
        detail:{count: 317, 
          stats:[
            {title:'Online',count:260},{title:'POS',count:57}
          ]
        }
      },
      {
        title:"Refunded", 
        icon:"pi-refresh", 
        detail:{count: 11, 
          stats:[
            {title:'Online',count:5},{title:'POS',count:6}
          ]
        }
      },
      {
        title:"Cancelled", 
        icon:"pi-times-circle", 
        detail:{count: 32, 
          stats:[
            {title:'Online',count:32},{title:'POS',count:0}
          ]
        }
      }
    ]
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
  loadData(i:number){
    this.data = {
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
    };
    this.data.labels = Array(...Array(this.duration).keys());
    this.data.datasets[0].backgroundColor = this.colors[i];
  }
  shuffle(){
    return this.sample
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  }

  selectChart(i:number){
    this.selectedIndex = i;
    this.loadData(i);
  }

  ngOnChanges(e:any){
    this.loadData(this.selectedIndex);
  }
}

