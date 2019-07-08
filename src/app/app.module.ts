import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { CityNamePage } from '../pages/city-name/city-name';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherDataProvider } from '../providers/weather-data/weather-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CityNamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CityNamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherDataProvider
  ]
})
export class AppModule {}
