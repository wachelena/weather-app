import { CurrentWeatherData } from './../models/current-weather-data.model';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current-weather-data',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.css']
})
export class CurrentWeatherDataComponent implements OnInit {

  currentWeather: CurrentWeatherData;

  constructor( private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.getCurrentWeatherData();
  }

  getCurrentWeatherData() {
    this.weatherService.getCurrentWeatherData().subscribe((response) => {
      this.currentWeather = response.body,
        console.log(this.currentWeather)
    }
    )
  }

}
