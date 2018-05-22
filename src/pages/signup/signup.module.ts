import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    HeaderComponentModule
  ],
})
export class SignupPageModule {}
