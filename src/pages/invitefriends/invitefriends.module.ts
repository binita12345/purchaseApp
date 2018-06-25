import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvitefriendsPage } from './invitefriends';
import { HeaderComponentModule } from '../../components/header/header.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
// import { PipesModule } from '../../pipes/pipes.module';
// import { Pipe, PipeTransform } from '@angular/core';
// import { SearchPipe } from '../../pipes/search/search';

@NgModule({
  declarations: [
    InvitefriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(InvitefriendsPage),
    // PipesModule,
    // SearchPipe,
    HeaderComponentModule,
    FooterComponentModule
  ],
 //  exports: [
	// InvitefriendsPage,
	// PipesModule,
	// // SearchPipe
 //  ]
})
export class InvitefriendsPageModule {}
