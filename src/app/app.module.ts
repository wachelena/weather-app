import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherDataComponent } from './current-weather-data/current-weather-data.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MeteogramComponent } from './charts/meteogram/meteogram.component';
import windbarb from 'highcharts/modules/windbarb.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ windbarb ];
}

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherDataComponent,
    MeteogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
