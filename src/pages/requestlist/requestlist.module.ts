import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestlistPage } from './requestlist';
import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    RequestlistPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestlistPage),
    Ionic2RatingModule,
    HeaderComponentModule,
    FooterComponentModule
  ],
  exports: [
    RequestlistPage
  ]
})
export class RequestlistPageModule {}
