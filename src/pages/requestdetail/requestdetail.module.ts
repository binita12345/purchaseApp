import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestdetailPage } from './requestdetail';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    RequestdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestdetailPage),
    FooterComponentModule
  ],
})
export class RequestdetailPageModule {}
