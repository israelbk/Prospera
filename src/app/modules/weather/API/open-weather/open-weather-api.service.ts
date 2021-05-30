import { WeatherType } from './weather-type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherApi } from '../weather-api';
import { Observable } from 'rxjs';
import { WeatherData } from '../../model/WeatherData';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherApiService implements WeatherApi {
  private weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

  constructor(private httpClient: HttpClient) {}

  getWeatherInGeoLocation(lat: number, long: number): Observable<WeatherData> {
    return this.httpClient.get<WeatherType>(this.constractUrl(lat, long)).pipe(
      map((resData: WeatherType) => ({
        temp: resData.main.temp,
        feelsLike: resData.main.feels_like,
        pressure: resData.main.pressure,
        humidity: resData.main.humidity,
        windSpeed: resData.wind.speed,
      }))
    );
  }

  private constractUrl(lat: number, long: number): string {
    const a =
      this.weatherBaseUrl +
      `lat=${lat}&lon=${long}&appid=${environment.openWeatherKey}`;
    return a;
  }
}
