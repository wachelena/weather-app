import { CurrentWeatherDataComponent } from './current-weather-data/current-weather-data.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { WeatherAlertsComponent } from './weather-alerts/weather-alerts.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';

const routes: Routes = [ { path: '', component: CurrentWeatherDataComponent },
                         { path: 'air', component: AirQualityComponent },
                         { path: 'alerts', component: WeatherAlertsComponent },
                         { path: 'daily-forecast', component: DailyForecastComponent }
                        ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
