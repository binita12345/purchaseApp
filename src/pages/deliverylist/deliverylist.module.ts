import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliverylistPage } from './deliverylist';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    DeliverylistPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliverylistPage),
    FooterComponentModule
  ],
})
export class DeliverylistPageModule {}
