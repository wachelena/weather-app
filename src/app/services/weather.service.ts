import { CurrentWeatherData } from '../models/current-weather-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(protected http: HttpClient) {}

  public getCurrentWeatherData() {
    return this.http.get<CurrentWeatherData>('http://api.weatherapi.com/v1/current.json?key=0ea33c2862ae419f854202839211503&q=Zagreb',
    { observe: 'response', responseType: 'json' });
  }

}
