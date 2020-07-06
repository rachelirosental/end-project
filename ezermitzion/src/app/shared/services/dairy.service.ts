import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { dairy } from 'src/app/Data/dairy';
@Injectable({
    providedIn: 'root'
  })
  export class DairyService{
    url: string;
    constructor(public httpClient: HttpClient) {
      this.url = environment.url + "Dairy";
    }
    delete(id:number)  {
        return this.httpClient.delete(this.url + "/delete/" + id);
      }
      getdaries() {
         return this.httpClient.get(this.url + "/getdaries");
      }
    }