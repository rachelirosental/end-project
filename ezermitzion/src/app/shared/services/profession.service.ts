import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Profession } from 'src/app/Data/Profession';
import { TypeProfessions} from 'src/app/Data/typeProfessions';
import { Kupot} from 'src/app/Data/Kupot';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  url: string;
  constructor(public httpClient: HttpClient) {
    this.url = environment.url + "Profession";
  }

  getProfList(): Observable<Profession[]> {
    return this.httpClient.get<Profession[]>(this.url + "/getProfList/" );

  }
  getProfById(id:number):Observable<Profession>{
return this.httpClient.get<Profession>(this.url+"/GetProfessionbyId/" + id)
  }


  
  createnew(Profession: Profession) :Observable<Profession> {
    return this.httpClient.post<Profession>(this.url + "/create",Profession);
  }
   
 delete(id:number)  {
    return this.httpClient.delete(this.url + "/deleate/" + id);
  }


  update(Profession: Profession) {
    return this.httpClient.post(this.url + "/update",Profession);
  }
  getTypeProfList(): Observable<TypeProfessions[]> {
    return this.httpClient.get<TypeProfessions[]>(this.url + "/getTypeProfList/" );
  }
  getProfKupotList(): Observable<Kupot[]> {
    return this.httpClient.get<Kupot[]>(this.url + "/getProfKupotList/" );
  }

}