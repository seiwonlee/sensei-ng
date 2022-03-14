// This is a static widget. Look at the other widgets for how to properly fetch and map json to models
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-social-static',
  templateUrl: './session-social-static.component.html',
  styleUrls: ['./session-social-static.component.scss']
})
export class SessionSocialStaticComponent implements OnInit {
  items:item[]=[];
  constructor() { }

  ngOnInit(): void {
    this.getStaticData();
  }

  getStaticData(){
    this.items = [
      {
        id: 1,
        name: "Facebook",
        count: 151,
        trend: 0.73,
        direction: -1
      },
      {
        id: 1,
        name: "Instagram",
        count: 108,
        trend: 0.15,
        direction: 1
      },
      {
        id: 1,
        name: "LinkedIn",
        count: 3,
        trend: null,
        direction: null
      },
      {
        id: 1,
        name: "Twitter",
        count: 2,
        trend: 1,
        direction: 1
      },
    ]
  }

}

export interface item{
  id?: number,
  name?: string,
  count?: number,
  trend?: number|null,
  direction?: number|null,
}