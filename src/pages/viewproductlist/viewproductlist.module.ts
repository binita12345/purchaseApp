import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewproductlistPage } from './viewproductlist';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    ViewproductlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewproductlistPage),
    FooterComponentModule
  ],
})
export class ViewproductlistPageModule {}
