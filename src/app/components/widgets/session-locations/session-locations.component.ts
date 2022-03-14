import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Geolocation } from 'src/app/models/geolocation';
import { DashService } from 'src/app/services/dash.service';

@Component({
  selector: 'app-session-locations',
  templateUrl: './session-locations.component.html',
  styleUrls: ['./session-locations.component.scss']
})
export class SessionLocationsComponent implements OnInit, OnChanges {
  @Input() duration:number=7;
  locations: Geolocation[];

  constructor(private dashService: DashService) { 
    this.dashService.getLocations().then(data => {
      this.locations = data;
    });
  }

  ngOnInit(): void {
  }
  ngOnChanges(e:any){
    //reload data if the @Input changes from the parent
  }
}
