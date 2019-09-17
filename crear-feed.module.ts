import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearFeedPage } from './crear-feed';

@NgModule({
  declarations: [
    CrearFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearFeedPage),
  ],
})
export class CrearFeedPageModule {}
