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
    this.scanForBeacons();
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


  goToDetails(beacon: Beacon) {
    this.navCtrl.push(BeaconDetailsPage, { beacon });
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeaconsPage');
  }

}
