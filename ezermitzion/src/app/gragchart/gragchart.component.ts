import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gragchart',
  templateUrl: './gragchart.component.html',
  styleUrls: ['./gragchart.component.scss']
})
export class GragchartComponent{

  dataSource: Object;
    chartConfig: Object;

    constructor() {
         this.chartConfig = {
            width: '700',
            height: '400',
            type: 'column2d',
            dataFormat: 'json',
        };

        this.dataSource = {
            "chart": {
              "caption": "התפלגות על פי נתונים סטטיסטים של עובדים",
              "subCaption": "In MMbbl = One Million barrels",
              "xAxisName": "עובדים",
              "yAxisName": "כמות הפניות",
              "numberSuffix": "K",
              "theme": "fusion",
            },
            "data": [{
              "label": "Venezuela",
              "value": "290"
            }, {
              "label": "Saudi",
              "value": "260"
            }, {
              "label": "Canada",
              "value": "180"
            }, {
              "label": "Iran",
              "value": "140"
            }, {
              "label": "Russia",
              "value": "115"
            }, {
              "label": "UAE",
              "value": "100"
            }, {
              "label": "US",
              "value": "30"
            }, {
              "label": "China",
              "value": "30"
            }]
          };

    }
}
