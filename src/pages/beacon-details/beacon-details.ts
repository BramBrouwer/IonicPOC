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

  beacon: Beacon;
  test: String;
  ble: BLE;
  connected: boolean;
  beaconinfo:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, ble: BLE,private toastCtrl: ToastController) {
    this.connected = false;
    this.beacon = navParams.get('beacon');
    this.ble = ble;
  }

  connect(id){
    console.log("CONNECT CALLED");
    var self = this;
    this.ble.connect(id).subscribe(
      data => self.successCallback(JSON.stringify(data)),
      error => self.errorCallback(JSON.stringify(error))
    );
  }

  disconnect(id){
    var self = this;
    this.ble.disconnect(id).then(()=>{
      console.log("Disconnected from beacon.");
      self.connected = false;
    });
  }

  successCallback(data){
      this.connected = true;
      this.beaconinfo = data;
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
