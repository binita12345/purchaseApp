import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeappPage } from './homeapp';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    HomeappPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeappPage),
    HeaderComponentModule
  ],
})
export class HomeappPageModule {}
