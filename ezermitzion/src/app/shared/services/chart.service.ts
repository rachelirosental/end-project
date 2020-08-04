import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Room } from 'src/app/Data/Room';
import { stringify } from 'querystring';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Charters } from 'src/app/Data/chart';
import { DairyComponent } from 'src/app/dairy/dairy.component';

@Injectable({
    providedIn: 'root'
  })
  export class ChartService{
    url: string;
    constructor(public httpClient: HttpClient) {
      this.url = environment.url + "Chart";
    }
    getCountTypeRef(): Observable<Charters[]> {
        return this.httpClient.get<Charters[]>(this.url + "/getCountTypeRef");
     }
   

  }


  