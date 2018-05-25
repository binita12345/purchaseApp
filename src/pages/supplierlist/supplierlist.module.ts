import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplierlistPage } from './supplierlist';

@NgModule({
  declarations: [
    SupplierlistPage,
  ],
  imports: [
    IonicPageModule.forChild(SupplierlistPage),
  ],
})
export class SupplierlistPageModule {}
