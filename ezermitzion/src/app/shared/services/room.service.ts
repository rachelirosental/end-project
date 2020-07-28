import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Room } from 'src/app/Data/Room';
import { stringify } from 'querystring';
import { getLocaleDateTimeFormat } from '@angular/common';
import { dairy } from 'src/app/Data/dairy';
import { DairyComponent } from 'src/app/dairy/dairy.component';

@Injectable({
    providedIn: 'root'
  })
  export class RoomService{
    url: string;
    constructor(public httpClient: HttpClient) {
      this.url = environment.url + "Room";
    }
    
    delete(id:number)  {
        return this.httpClient.delete(this.url + "/delete/" + id);
      }
      getrooms() {
         return this.httpClient.get(this.url + "/getrooms");
      }
      getRoomByid(id:number):Observable<Room>{
        return this.httpClient.get<Room>(this.url+"/getRefByid/" + id);
      }
    
      update(reference: Room) {
        return this.httpClient.post(this.url + "/update", reference);
      }
      create(reference: Room) {
        return this.httpClient.post(this.url + "/create", reference);
      }
      getlistrooms(dairy:dairy) {
      var start=dairy.start.toTimeString;
        var end = dairy.end.toString;
        return this.httpClient.get(this.url + "/getlistrooms/" + start + "/" + end);
      }

  }

  