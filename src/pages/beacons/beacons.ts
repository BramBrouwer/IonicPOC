import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from "@ionic-native/ble";
import { Beacon } from "../../models/beacon";
import { NgZone } from "@angular/core";
import { BeaconDetailsPage } from "../beacon-details/beacon-details";

/**
 * Generated class for the BeaconsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beacons',
  templateUrl: 'beacons.html',
})
export class BeaconsPage {

  foundDevices: Array<Beacon>;
  zone: NgZone;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ble: BLE) {
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.foundDevices = [];
    this.generateTestData(); 
    // this.scanForBeacons();
  }

generateTestData(){
  var beacon1 = new Beacon("Beacon 1","1",[1,0,145,5],77);
  var beacon2 = new Beacon("Beacon 2","2",[6,3,4,1],63);
  var beacon3 = new Beacon("Beacon 3","3",[1,8,3,5],82);
  var beacon4 = new Beacon("Beacon 4","4",[11,3,5,5],36);
  this.foundDevices.push(beacon1);
  this.foundDevices.push(beacon2);
  this.foundDevices.push(beacon3);
  this.foundDevices.push(beacon4);
}
  scanForBeacons(){
    this.ble.scan([], 10).subscribe(device => {
      this.zone.run(() => {
        var adData = new Uint8Array(device.advertising);
        device.advertising = adData;
        this.foundDevices.push(device);
      })
    })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.foundDevices = [];
    this.scanForBeacons();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 10000);
  }

  goToDetails(beacon: Beacon) {
    this.navCtrl.push(BeaconDetailsPage, { beacon });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeaconsPage');
  }

}
