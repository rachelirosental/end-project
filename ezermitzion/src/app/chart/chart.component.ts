import { Component, OnInit,NgZone } from '@angular/core';
import { ChartService } from '../shared/services/chart.service';
import {Charters} from 'src/app/Data/chart'
import { th } from 'date-fns/locale';
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
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  selectedSlice = 'none';
  chart: any;
  width = "100%";
  height = 400;
  type = "pie2d";
  dataFormat = "json";
  dataSource = data;
  constructor(private zone: NgZone ,public ChartService:ChartService) {
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
