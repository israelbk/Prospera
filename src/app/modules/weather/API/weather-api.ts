import { Observable } from 'rxjs';
import { WeatherData } from './../model/WeatherData';

export interface WeatherApi {
  getWeatherInGeoLocation(lat: number, long: number): Observable<WeatherData>;
}
