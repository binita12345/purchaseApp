import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliverylistPage } from './deliverylist';

@NgModule({
  declarations: [
    DeliverylistPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliverylistPage),
  ],
})
export class DeliverylistPageModule {}
