import { Component, OnInit } from '@angular/core';
import {Duration} from '../../models/duration';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  range:Duration[] = [
    {name: 'Last 7 days', value: 7},
    {name: 'Last 14 days', value: 14},
    {name: 'Last 30 days', value: 30},
  ];
  selectedRange: number;

  constructor() { 
    this.selectedRange = this.range[2].value;
  }

  ngOnInit(): void {
  }
  
  durationChanged(e:any){
  }
}
