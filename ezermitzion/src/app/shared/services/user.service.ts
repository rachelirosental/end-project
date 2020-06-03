import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { user } from 'src/app/Data/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;
  constructor(public httpClient: HttpClient) {
    this.url = environment.url + "User";
  }

  login(pass, name): Observable<user> {
    return this.httpClient.get<user>(this.url + "/login/" + pass + "/" + name);
  }

  create(user: user) {
    return this.httpClient.post(this.url + "/create", user);
  }
  delete(id:number)  {
    return this.httpClient.delete(this.url + "/delete/" + id);
  }
  getusers() {
     return this.httpClient.get(this.url + "/getusers");
  }
  getuserByid(id:number):Observable<user>{
    return this.httpClient.get<user>(this.url+"/getuserByid/" + id);
  }

  update(user: user) {
    return this.httpClient.post(this.url + "/update", user);
  }

}
