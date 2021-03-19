import { CurrentWeatherData } from './../models/current-weather-data.model';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {

  currentWeather: CurrentWeatherData;
  airQualityAndWeather: CurrentWeatherData;

  constructor( private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.getWeatherAndAirQuality();
  }
  
  getWeatherAndAirQuality() {
    this.weatherService.getWeatherAndAirQuality().subscribe((response) => {
      this.airQualityAndWeather = response.body,
        console.log(this.airQualityAndWeather)
    }
    )
  }

}
