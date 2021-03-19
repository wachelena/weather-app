import { CurrentWeatherDataComponent } from './current-weather-data/current-weather-data.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirQualityComponent } from './air-quality/air-quality.component';

const routes: Routes = [ { path: '', component: CurrentWeatherDataComponent },
                         { path: 'air', component: AirQualityComponent },
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
