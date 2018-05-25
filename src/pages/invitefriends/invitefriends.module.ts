import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvitefriendsPage } from './invitefriends';
import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    InvitefriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(InvitefriendsPage),
    HeaderComponentModule,
    FooterComponentModule
  ],
})
export class InvitefriendsPageModule {}
