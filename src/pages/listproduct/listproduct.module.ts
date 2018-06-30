import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListproductPage } from './listproduct';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    ListproductPage,
  ],
  imports: [
    IonicPageModule.forChild(ListproductPage),
    FooterComponentModule
  ],
})
export class ListproductPageModule {}
