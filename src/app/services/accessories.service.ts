import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Accessory } from '../models/accessory.model';
import { CurrentWeatherData } from '../models/current-weather-data.model';
import { WeatherService } from './weather.service';

@Injectable({
    providedIn: 'root'
})
export class AccessoriesService {

    constructor(protected http: HttpClient, protected weatherService: WeatherService) { }

    public getRecommendedAccessories() {

        return this.weatherService.getCurrentWeatherData()
        .pipe(map(currentWeatherDataResponse => {
            const responseBody = currentWeatherDataResponse.body;
            return this.mapWeatherToAccessories(responseBody);
        }));

    }

    protected mapWeatherToAccessories(currentWeather: CurrentWeatherData): Accessory[] {
        const accessories: Accessory[] = [];
        // ovdje implementirajte logiku za izracun preporucene opreme obzirom na vremenske (neprilike), npr.
        let text = '';
        let icon = '';
        if (currentWeather.current.condition.code == 1000) {
            text = 'Ne zaboravite ponijeti sunčane naočale!';
            icon = 'bi bi-sunglasses';
            accessories.push(new Accessory(text, icon));
        }        

        return accessories;
    }


}
