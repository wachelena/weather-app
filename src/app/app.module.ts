import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherDataComponent } from './current-weather-data/current-weather-data.component';
import { HighchartsChartModule } from 'highcharts-angular';

import windbarb from 'highcharts/modules/windbarb.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { DoughnutChartComponent } from './charts/doughnut-chart.ts/doughnut-chart.component';
import { WeatherAlertsComponent } from './weather-alerts/weather-alerts.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';
import { ReportWeatherComponent } from './report-weather/report-weather.component';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ windbarb ];
}

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherDataComponent,
    DoughnutChartComponent,
    WeatherAlertsComponent,
    DailyForecastComponent,
    ReportWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    ChartModule,
    FormsModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
