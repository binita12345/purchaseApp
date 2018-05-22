import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangepasswordPage } from './changepassword';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    ChangepasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangepasswordPage),
    HeaderComponentModule
  ],
})
export class ChangepasswordPageModule {}
