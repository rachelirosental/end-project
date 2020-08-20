import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { opinion } from 'src/app/Data/Opinion';
@Injectable({
    providedIn: 'root'
  })
  export class OpinionService{
    url: string;
    constructor(public httpClient: HttpClient) {
      this.url = environment.url + "Opinion";
    }
    getOpinionList(): Observable<opinion[]> {
        return this.httpClient.get<opinion[]>(this.url + "/getOpinionList/" );
    
      }
      getOpinionbyprofid(id:number):Observable<opinion[]>{
        return this.httpClient.get<opinion[]>(this.url+"/getopinionbyprofid/"+ id );
      }
      create(opinion: opinion) {
        
        return this.httpClient.post(this.url + "/create", opinion);
      }
}