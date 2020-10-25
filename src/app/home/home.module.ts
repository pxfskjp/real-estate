import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RoomsAndBathsPipe } from '../rooms-and-baths.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, RoomsAndBathsPipe]
})
export class HomePageModule {}
