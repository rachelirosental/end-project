import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Room } from 'src/app/Data/Room';
import { stringify } from 'querystring';
import { getLocaleDateTimeFormat } from '@angular/common';
import { dairy } from 'src/app/Data/dairy';
import { DairyComponent } from 'src/app/dairy/dairy.component';
import { MyDate } from 'src/app/Data/mydate';
import { user } from 'src/app/Data/user';

@Injectable({
    providedIn: 'root'
  })
  export class RoomService{
    url: string;
    constructor(public httpClient: HttpClient) {
      this.url = environment.url + "Room";
    }
         public  mydate =new MyDate();
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
        debugger;
    this.mydate.start=dairy.start;
    this.mydate.end=dairy.end;

        return this.httpClient.post(this.url + "/getlistrooms" ,this.mydate );
      }

  }

  