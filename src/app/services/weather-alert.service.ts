import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherAlert } from '../models/weather-alert.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherAlertService {

  constructor(protected http: HttpClient) {}

  public getLastWeatherAlertForCity(city: string) {
   // return this.http.get<WeatherAlert>('https://weather-app-e7fe910c.herokuapp.com/getCity/' + city,
    return this.http.get<WeatherAlert>('http://localhost:8080/getCity/' + city,
    { observe: 'response', responseType: 'json' });
  }

  public getAllWeatherAlerts() {
    // GET request za dohvat svih prijavljenih vremenskih neprilika
    //https://weather-app-e7fe910c.herokuapp.com/getAll
  }

  public reportWeatherAlert() {
    // POST request za spremanje podataka o vremenskoj neprilici
    // https://weather-app-e7fe910c.herokuapp.com/report
  }

}
