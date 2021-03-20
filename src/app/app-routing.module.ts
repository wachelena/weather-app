import { CurrentWeatherDataComponent } from './current-weather-data/current-weather-data.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';

const routes: Routes = [ { path: '', component: CurrentWeatherDataComponent },
                         { path: 'air', component: AirQualityComponent },
                         { path: 'daily-forecast', component: DailyForecastComponent }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
