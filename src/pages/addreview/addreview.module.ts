import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddreviewPage } from './addreview';
import { Ionic2RatingModule } from 'ionic2-rating';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    AddreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddreviewPage),
    Ionic2RatingModule,
    FooterComponentModule
  ],
  exports: [
    AddreviewPage
  ]
})
export class AddreviewPageModule {}
