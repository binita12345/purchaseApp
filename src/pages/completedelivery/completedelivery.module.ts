import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletedeliveryPage } from './completedelivery';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    CompletedeliveryPage,
  ],
  imports: [
    IonicPageModule.forChild(CompletedeliveryPage),
    FooterComponentModule
  ],
})
export class CompletedeliveryPageModule {}
