import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderproductPage } from './orderproduct';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    OrderproductPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderproductPage),
    FooterComponentModule
  ],
})
export class OrderproductPageModule {}
