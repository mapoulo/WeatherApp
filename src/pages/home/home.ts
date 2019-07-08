import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherDataProvider } from '../../providers/weather-data/weather-data';
import { NavParams } from 'ionic-angular';
import { CityNamePage } from '../city-name/city-name';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public data:WeatherDataProvider, public navParams:NavParams ) {
   
  }

  WeatherData:any;
  City: string = "Johannesburg";
  icon:any;

  ionViewWillEnter(){
    
    this.getDataFromCityPage();
    this.data.LoadWeatherData(this.City).subscribe(data => {this.WeatherData = data;this.icon = data.weather[0].icon+'.png';});
    
  }

  getDataFromCityPage(){
   this.City = this.navParams.get('cityName');
 
  }

  PopThisPage(){
    console.log(this.WeatherData);
    this.navCtrl.push(CityNamePage);
  }


}
