import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangepasswordPage } from './changepassword';
import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    ChangepasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangepasswordPage),
    HeaderComponentModule,
    FooterComponentModule
  ],
})
export class ChangepasswordPageModule {}
