import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartlistPage } from './cartlist';
import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    CartlistPage,
  ],
  imports: [
    IonicPageModule.forChild(CartlistPage),
    HeaderComponentModule,
    FooterComponentModule
  ],
})
export class CartlistPageModule {}
