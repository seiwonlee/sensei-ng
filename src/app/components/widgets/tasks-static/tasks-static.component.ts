import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-static',
  templateUrl: './tasks-static.component.html',
  styleUrls: ['./tasks-static.component.scss']
})
export class TasksStaticComponent implements OnInit {

  tasks:any=[];
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.tasks = [
      {
        desc:"12 Orders to fulfill",
        percent:75
      },
      {
        desc:"40+ Payments to withdraw",
        percent:65
      },
      {
        desc:"4 Reports to revise",
        percent:85
      },
      {
        desc:"6 Questions to respond",
        percent:45
      },
      {
        desc:"2 Chargebacks to review",
        percent:60
      },
    ]
  }
}
