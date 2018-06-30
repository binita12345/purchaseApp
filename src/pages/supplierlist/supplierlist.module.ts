import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplierlistPage } from './supplierlist';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    SupplierlistPage,
  ],
  imports: [
    IonicPageModule.forChild(SupplierlistPage),
    FooterComponentModule
  ],
})
export class SupplierlistPageModule {}
