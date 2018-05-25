import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestlistPage } from './requestlist';
import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    RequestlistPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestlistPage),
    HeaderComponentModule,
    FooterComponentModule
  ],
})
export class RequestlistPageModule {}
