import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityNamePage } from './city-name';

@NgModule({
  declarations: [
    CityNamePage,
  ],
  imports: [
    IonicPageModule.forChild(CityNamePage),
  ],
})
export class CityNamePageModule {}
