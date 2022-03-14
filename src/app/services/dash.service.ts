import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '../models/geolocation';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<any>('assets/data/session-locations.json')
    .toPromise()
    .then(res => <Geolocation[]>res.data)
    .then(data => { return data; });
  }
  getTodo() {
    return this.http.get<any>('assets/data/todo.json')
    .toPromise()
    .then(res => <any>res.data)
    // .then(data => { return data; });
  }
}
