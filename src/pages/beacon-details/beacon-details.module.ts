import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeaconDetailsPage } from './beacon-details';

@NgModule({
  declarations: [
    BeaconDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BeaconDetailsPage),
  ],
})
export class BeaconDetailsPageModule {}
