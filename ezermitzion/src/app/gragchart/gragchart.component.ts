import { Component, OnInit, NgZone } from '@angular/core';
import { ChartService } from '../shared/services/chart.service';
const data = {
  chart: {
    theme: "fusion",
    thousandSeparator: ",",
    decimalSeparator: ".",
    numberSuffix: "",
    formatNumberScale: "0",
    showvalues: "0",
    legenditemfontsize: "15",
    legenditemfontbold: "1",
    palettecolors: "DBE0FF"
  },
  data: [
  ]
};

@Component({
  selector: 'app-gragchart',
  templateUrl: './gragchart.component.html',
  styleUrls: ['./gragchart.component.scss']
})
export class GragchartComponent{

  // dataSource: Object;
 chartConfig: Object;
    selectedSlice = 'none';
    chart: any;
    width = "100%";
    height = 400;
    type = "pie2d";
    dataFormat = "json";
    dataSource = data;
    constructor(private zone: NgZone ,public ChartService:ChartService) {
      this.chartConfig = {
                width: '700',
                height: '400',
                type: 'column2d',
                dataFormat: 'json',
            };
     this.getCountTypeRef();
    }
  
    getCountTypeRef(){
     return this.ChartService.getCountTypeRef().subscribe(res=>{
      localStorage.setItem("counttyperef",JSON.stringify(res)) ,
      data.data=res,
      console.log(typeof(this.dataSource.data))});
  
  }
    ngOnInit() {
  
      // setTimeout(() => {
      //   SelectedSingleton.change(this.sampleCode['ex24'].title);
      // })
    }
  
  }
  
    // constructor() {
    //      this.chartConfig = {
    //         width: '700',
    //         height: '400',
    //         type: 'column2d',
    //         dataFormat: 'json',
    //     };

    //     this.dataSource = {
    //         "chart": {
    //           "caption": "התפלגות על פי נתונים סטטיסטים של עובדים",
    //           "subCaption": "In MMbbl = One Million barrels",
    //           "xAxisName": "עובדים",
    //           "yAxisName": "כמות הפניות",
    //           "numberSuffix": "K",
    //           "theme": "fusion",
    //         },
    //         "data": [{
    //           "label": "Venezuela",
    //           "value": "290"
    //         }, {
    //           "label": "Saudi",
    //           "value": "260"
    //         }, {
    //           "label": "Canada",
    //           "value": "180"
    //         }, {
    //           "label": "Iran",
    //           "value": "140"
    //         }, {
    //           "label": "Russia",
    //           "value": "115"
    //         }, {
    //           "label": "UAE",
    //           "value": "100"
    //         }, {
    //           "label": "US",
    //           "value": "30"
    //         }, {
    //           "label": "China",
    //           "value": "30"
    //         }]
    //       };

    // }
    
// }
