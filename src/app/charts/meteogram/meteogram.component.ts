import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-meteogram',
  templateUrl: './meteogram.component.html',
  styleUrls: ['./meteogram.component.css']
})
export class MeteogramComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  symbols = [];
  precipitations = [];
  winds = [];
  temperatures = [];
  pressures = [];


  meteogramOptions: any = {
    chart: {
      marginBottom: 70,
      marginRight: 40,
      marginTop: 50,
      plotBorderWidth: 1,
      height: 310,
      alignTicks: false,
      scrollablePlotArea: {
        minWidth: 720
      }
    },

    defs: {
      patterns: [{
        id: 'precipitation-error',
        path: {
          d: [
            'M', 3.3, 0, 'L', -6.7, 10,
            'M', 6.7, 0, 'L', -3.3, 10,
            'M', 10, 0, 'L', 0, 10,
            'M', 13.3, 0, 'L', 3.3, 10,
            'M', 16.7, 0, 'L', 6.7, 10
          ].join(' '),
          stroke: '#68CFE8',
          strokeWidth: 1
        }
      }]
    },

    title: {
      text: 'Meteogram for Zagreb, Croatia',
      align: 'left',
      style: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat:
        '<small>{point.x:%A, %b %e, %H:%M} - {point.point.to:%H:%M}</small><br> <b>{point.point.symbolName}</b><br>'
    },

    xAxis: [{ // Bottom X axis
      type: 'datetime',
      tickInterval: 72e5, // two hours
      minorTickInterval: 36e5, // one hour
      tickLength: 0,
      gridLineWidth: 1,
      gridLineColor: 'rgba(128, 128, 128, 0.1)',
      startOnTick: false,
      endOnTick: false,
      minPadding: 0,
      maxPadding: 0,
      offset: 30,
      showLastLabel: true,
      labels: {
        format: '{value:%H}'
      },
      crosshair: true
    }, { // Top X axis
      linkedTo: 0,
      type: 'datetime',
      // tickInterval: 24 * 3600 * 1000,
      tickInterval: 86400000,
      labels: {
        format: '{value:<span style="font-size: 12px; font-weight: bold">%a</span> %b %e}',
        align: 'left',
        x: 3,
        y: -5
      },
      opposite: true,
      tickLength: 20,
      gridLineWidth: 1
    }],

    yAxis: [{ // temperature axis
      title: {
        text: null
      },
      labels: {
        format: '{value}°',
        style: {
          fontSize: '10px'
        },
        x: -3
      },
      plotLines: [{ // zero plane
        value: 0,
        color: '#BBBBBB',
        width: 1,
        zIndex: 2
      }],
      maxPadding: 0.3,
      minRange: 10,
      tickInterval: 1,
      gridLineColor: 'rgba(128, 128, 128, 0.1)'

    }, { // precipitation axis
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      gridLineWidth: 0,
      tickLength: 0,
      minRange: 10,
      min: 0

    }, { // Air pressure
      allowDecimals: false,
      title: { // Title on top of axis
        text: 'hPa',
        offset: 0,
        align: 'high',
        rotation: 0,
        style: {
          fontSize: '10px',
          color: 'pink'
        },
        textAlign: 'left',
        x: 3
      },
      labels: {
        style: {
          fontSize: '8px',
          color: 'purple'
        },
        y: 2,
        x: 3
      },
      gridLineWidth: 0,
      opposite: true,
      showLastLabel: false
    }],

    legend: {
      enabled: false
    },

    plotOptions: {
      series: {
        pointPlacement: 'between'
      }
    },

    series: [{
      name: 'Temperature',
      // data: this.temperatures,
      data: [1, 5, 2.8, 4, 13, 16, 17.6, 8, 1],
      type: 'spline',
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true
          }
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span>{series.name}: <b>{point.value}°C</b><br/>'
      },
      zIndex: 1,
      color: '#FF3333',
      negativeColor: '#48AFE8'
    }, {
      name: 'Precipitation',
      data: [0, 1, 0.1, 0.2, 0.3, 1, 2, 1, 0.4],
      type: 'column',
      color: '#68CFE8',
      yAxis: 1,
      groupPadding: 0,
      pointPadding: 0,
      grouping: false,
      dataLabels: {

      },
      tooltip: {
        valueSuffix: ' mm'
      }
    }, {
      name: 'Air pressure',
      color: Highcharts.getOptions().colors[2],
      data: [1031.7, 1012.1, 1013.25, 1031.2, 1005.7, 1019.7, 1030.7, 1032.5, 1032.2],
      marker: {
        enabled: false
      },
      shadow: false,
      tooltip: {
        valueSuffix: ' hPa'
      },
      dashStyle: 'shortdot',
      yAxis: 2
    }, {
      name: 'Wind',
      type: 'windbarb',
      id: 'windbarbs',
      color: 'black',
      lineWidth: 1.5,
      data: [[9.8, 177.9],
            [10.1, 177.2],
            [11.3, 179.7],
            [10.9, 175.5],
            [9.3, 60.9],
            [8.8, 159.6],
            [7.8, 162.6],
            [5.6, 186.2],
            [6.8, 270.0]],
      vectorLength: 18,
      yOffset: -15,
      tooltip: {
        valueSuffix: ' m/s'
      }
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
