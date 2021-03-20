import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { City } from '../_interface/city.model';
import { DailyData } from '../_interface/daily-data.model';
import { DailyTemp } from '../_interface/daily-temp.model';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {
  name: string = 'Sisak';
  location: City;
  weatherData: DailyData[] = [];

  canvas: any;
  ctx: any;
  dailyTempChart: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.location = new City();
  }

  setValue() {
    this.weatherService.getDailyWeatherByCityName(this.name).subscribe(
      (res: any) => {
        console.log(res)
        this.weatherData = [];
        this.location.name = res.location.name;
        this.location.date = res.location.localtime.split(" ")[0];
        this.location.localTime = res.location.localtime.split(" ")[1];

        res.forecast.forecastday.forEach(day => {
          this.weatherData.push(this.createDailyDataObject(day));
        });

        this.renderLineChart(this.weatherData[0]);
      }
    )
  }

  createDailyDataObject(day: any) {
    let dailyData: DailyData = new DailyData();
    let hourlyData: DailyTemp[] = [];

    dailyData.date = day.date;
    dailyData.maxtemp = day.day.maxtemp_c;
    dailyData.mintemp = day.day.mintemp_c;
    dailyData.weatherIcon = day.day.condition.icon;
    
    day.hour.filter((_, x) => x % 3 == 0)
      .forEach(hour => {
        let dailyTemp: DailyTemp = new DailyTemp();
        dailyTemp.time = hour.time.split(" ")[1];
        dailyTemp.temp_c = hour.temp_c;

        hourlyData.push(dailyTemp);
      });

    dailyData.hourlyData = hourlyData;

    return dailyData;
  }

  renderLineChart(data: DailyData) {
    let hourData: string[] = data.hourlyData.map(x => x.time);
    let tempData: number[] = data.hourlyData.map(x => x.temp_c);

    if (this.dailyTempChart) {
      this.dailyTempChart.destroy();
    }

    let options: any = {
      legend: {
        display: false
      },
      responsive: false,
      maintainAspectRatio: true,
      display: true,
      fill: false,
      scales: {
        xAxes: [{
          ticks: {
            fontSize: 12,
            fontFamily: 'Verdana',
            fontColor: 'grey',
            fontStyle: 'normal'
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            suggestedMax: Math.max(...tempData) + 5,
            display: false
          },
          gridLines: {
            display: false
          }
        }]
      }
    }
    this.canvas = document.getElementById('tempChart');
    this.ctx = this.canvas.getContext('2d');

    this.dailyTempChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: hourData,
        datasets: [{
          label: 'C°',
          data: tempData,
          borderColor: 'rgba(255,204,0,1)',
          backgroundColor: 'rgba(255,245,204,1)',
          borderWidth: 3,
          pointRadius: 0
        }]
      },
      options: options,
      plugins: [{
        afterDatasetsDraw: function (chart) {
          var ctx = chart.ctx;
          chart.data.datasets.forEach(function (dataset, index) {
            var datasetMeta = chart.getDatasetMeta(index);
            if (datasetMeta.hidden) return;
            datasetMeta.data.forEach(function (point, index) {
              var value = dataset.data[index],
                x = point.getCenterPoint().x,
                y = point.getCenterPoint().y,
                radius = point._model.radius,
                fontSize = 14,
                fontFamily = 'Verdana',
                fontColor = 'grey',
                fontStyle = 'normal';
              ctx.save();
              ctx.textBaseline = 'middle';
              ctx.textAlign = 'center';
              ctx.font = fontStyle + ' ' + fontSize + 'px' + ' ' + fontFamily;
              ctx.fillStyle = fontColor;
              ctx.fillText(value, x, y - radius - fontSize);
              ctx.restore();
            });
          });
        }
      }]
    });
  }
}
