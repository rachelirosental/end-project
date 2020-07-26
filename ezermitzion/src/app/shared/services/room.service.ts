import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Room } from 'src/app/Data/Room';
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
      getlistrooms(start,end): Observable<Room[]> {

        return this.httpClient.get<Room[]>(this.url + "/getlistrooms/" + start + "/" + end);
      }

  }

  