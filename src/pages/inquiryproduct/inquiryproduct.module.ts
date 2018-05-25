import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InquiryproductPage } from './inquiryproduct';
import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    InquiryproductPage,
  ],
  imports: [
    IonicPageModule.forChild(InquiryproductPage),
    HeaderComponentModule,
    FooterComponentModule
  ],
})
export class InquiryproductPageModule {}
