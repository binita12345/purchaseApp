import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewlistPage } from './reviewlist';
import { Ionic2RatingModule } from 'ionic2-rating';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    ReviewlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewlistPage),
    Ionic2RatingModule,
    FooterComponentModule
  ],
  exports: [
    ReviewlistPage
  ]
})
export class ReviewlistPageModule {}
