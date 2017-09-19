import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Beacon } from "../../models/beacon";
import { BLE } from "@ionic-native/ble";
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the BeaconDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beacon-details',
  templateUrl: 'beacon-details.html',
})
export class BeaconDetailsPage {

  inputBeacon: Beacon;            //Beacon passed from beacons screen
  test: String;
  ble: BLE;   
  connected: boolean;
  connectedBeacon:Beacon;         //Beacon instance returned when connecting
  connectedBeaconString:string;   //String intance of returned beacon

  constructor(public navCtrl: NavController, public navParams: NavParams, ble: BLE,private toastCtrl: ToastController) {
    this.connected = false;
    this.inputBeacon = navParams.get('beacon');
    this.ble = ble;
    this.displayTestBeacon();
  }

  displayTestBeacon(){
    this.connectedBeacon = this.inputBeacon;
    this.connectedBeaconString = JSON.stringify(this.connectedBeacon);
  }

  connect(device_id){
    
    var self = this;
    this.ble.connect(device_id).subscribe(
      data => self.successCallback(JSON.stringify(data)),
      error => self.errorCallback(JSON.stringify(error))
    );

  }


  disconnect(id){
    var self = this;
    this.ble.disconnect(id).then(()=>{
      console.log("Disconnected from beacon.");
      this.connectedBeacon = null;
      self.connected = false;
    });
  }

  successCallback(data){
      this.connected = true;
      this.connectedBeacon = data;
      console.log(data);
      this.presentToast("Succesfully connected");
  }

  errorCallback(error){
    console.log(error);
    this.presentToast("Error connecting");
  }



/*
  Utility
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad BeaconDetailsPage');
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
