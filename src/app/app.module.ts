import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BLE } from '@ionic-native/ble';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsers } from "../providers/github-users/github-users";
import { HttpModule } from "@angular/http";
import { BeaconsPage } from "../pages/beacons/beacons";
import { BeaconDetailsPage } from "../pages/beacon-details/beacon-details";


@NgModule({
  declarations: [
    MyApp,
    BeaconsPage,
    BeaconDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BeaconsPage,
    BeaconDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers,
    BLE
  ]
})
export class AppModule {}
