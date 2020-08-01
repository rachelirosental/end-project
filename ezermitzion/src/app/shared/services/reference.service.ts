import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Reference } from 'src/app/Data/Reference';
@Injectable({
    providedIn: 'root'
  })
  export class ReferenceService{
    url: string;
    constructor(public httpClient: HttpClient) {
      this.url = environment.url + "Reference";
    }
    delete(id:number)  {
        return this.httpClient.delete(this.url + "/delete/" + id);
      }
      getreference() {
         return this.httpClient.get(this.url + "/getreference");
      }
      getRefByid(id:number):Observable<Reference>{
        return this.httpClient.get<Reference>(this.url+"/getRefByid/" + id);
      }
    
      update(reference: Reference) {
        return this.httpClient.post(this.url + "/update", reference);

      }
      create(reference: Reference) {
        console.log(reference);
        return this.httpClient.post(this.url + "/create", reference);
        
      }

  }

  