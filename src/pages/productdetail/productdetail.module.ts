import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductdetailPage } from './productdetail';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    ProductdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductdetailPage),
    FooterComponentModule
  ],
})
export class ProductdetailPageModule {}
