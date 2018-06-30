import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InquiryproductdetailPage } from './inquiryproductdetail';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    InquiryproductdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InquiryproductdetailPage),
    FooterComponentModule
  ],
})
export class InquiryproductdetailPageModule {}
