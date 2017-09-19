import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
//import { User } from "../../models/user";


@Injectable()
export class BeaconService {
  baseUrl = 'https://ble-platform-backend.herokuapp.com';

  constructor(public http: Http) { }


  getBeaconInfo(beaconId: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/beacon/${beaconId}`)
      .map(res => (res.json()))
  }

  getBeacons(): Observable<any> {
    // console.log(`${this.baseUrl}/beacon/`);
    return this.http.get(`${this.baseUrl}/beacon/`)
    .map(res => (res.json()));
}

  // loadDetails(login: string): Observable<User> {
  //   return this.http.get(`${this.githubApiUrl}/users/${login}`)
  //     .map(res => <User>(res.json()))
  // }

  
  // // Load all github users
  // load(): Observable<User[]> {
  //   return this.http.get(`${this.githubApiUrl}/users`)
  //     .map(res => <User[]>res.json());
  // }

}