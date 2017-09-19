import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from "@ionic-native/ble";
import { Beacon } from "../../models/beacon";
import { NgZone } from "@angular/core";
import { BeaconDetailsPage } from "../beacon-details/beacon-details";
import { Characteristic } from "../../models/characteristic";
import { BeaconService } from "../../providers/beacons";

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public ble: BLE,
    private beaconService: BeaconService) {
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.foundDevices = [];
    beaconService.getBeacons().subscribe(result =>{
     console.log(result);
    });
    //this.generateTestData(); 
    // this.scanForBeacons();
  }

  /*
    Scan for beacons. Called on page start&page refresh
  */
  scanForBeacons(){
    this.ble.scan([], 10).subscribe(device => {
      this.zone.run(() => {
        var adData = new Uint8Array(device.advertising);
        device.advertising = adData;
        this.foundDevices.push(device);
      })
    })
  } 

  /*
    Refresh page
  */
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.foundDevices = [];
    this.scanForBeacons();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 10000);
  }
  
   /*
    Generate test data so we can testrun in browser without needing bluetooth
  */
  generateTestData(){
    var beacon1 = new Beacon(
      "Beacon 1",
      "1",
      [1,0,145,5],
      77,
      ["2314","123512","937860","930125"],
      [
        new Characteristic(123,"adsa",["a","b","c"],[{uuid:"asdas"}]),
        new Characteristic(456,"mem",["d","e","f"],[{uuid:"a32da2ds"}]),
        new Characteristic(789,"1v1me",["g","h","i"],[{uuid:"12821ueysq"}])
      ],
      [{uuid: "asda"}]
    );
    this.foundDevices.push(beacon1);
  }
  
  /*
    Utility
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad BeaconsPage');
  }
  
  /*
    Navigate to detail page and pass currently selected beacon
  */
  goToDetails(beacon: Beacon) {
    this.navCtrl.push(BeaconDetailsPage, { beacon });
  }

}
