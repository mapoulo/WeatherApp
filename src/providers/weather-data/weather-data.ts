import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherDataProvider {

  constructor(public http: Http) {
    console.log('Hello WeatherDataProvider Provider');
  }

 

  LoadWeatherData(City:string){
   return  this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+City+",za&units=metric&APPID=d888fea3671eaa6aa3d1e679b8283005").map(res => res.json());
  }
}
