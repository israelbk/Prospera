import { OpenWeatherApiService } from './API/open-weather/open-weather-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  constructor(weather: OpenWeatherApiService) {
    weather
      .getWeatherInGeoLocation(35, 33)
      .subscribe((weather) => console.log(weather.temp));
  }

  ngOnInit() {}
}
