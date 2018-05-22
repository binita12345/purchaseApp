import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotpasswordPage } from './forgotpassword';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    ForgotpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotpasswordPage),
    HeaderComponentModule
  ],
})
export class ForgotpasswordPageModule {}
