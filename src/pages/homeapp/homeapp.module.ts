import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeappPage } from './homeapp';
import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    HomeappPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeappPage),
    HeaderComponentModule,
    FooterComponentModule
  ],
})
export class HomeappPageModule {}
