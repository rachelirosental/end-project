import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { dairy } from 'src/app/Data/dairy';
import { TypeMeeting } from 'src/app/Data/TypeMeeting';

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
      getdaries(id:number) {
         return this.httpClient.get(this.url + "/getdaries/" + id);
      }
      create(dairy: dairy) {
        debugger;
        return this.httpClient.post(this.url + "/create", dairy);
      }
      getTypeMeetList(): Observable<TypeMeeting[]> {
        return this.httpClient.get<TypeMeeting[]>(this.url + "/getTypeMeetingList" );
      }
      
      getdairybyuserid(id:number):Observable<dairy[]>{
        
        return this.httpClient.get<dairy[]>(this.url+"/getdairybyroomid/"+ id );
      }
      getmeetbyuserid(id:number):Observable<dairy[]>{
        
        return this.httpClient.get<dairy[]>(this.url+"/getdaries/"+ id );
      }
      update(dairy: dairy) {
        return this.httpClient.post(this.url + "/update",dairy )  
      }
    }