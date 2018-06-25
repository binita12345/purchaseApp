import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
// import { InvitefriendsPageModule } from '../pages/invitefriends/invitefriends.module';

@NgModule({
	declarations: [SearchPipe,
    SortPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe]
})
export class PipesModule {}
