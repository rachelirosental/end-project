import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { user } from 'src/app/Data/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
public key:any;
  url: string;
  constructor(public httpClient: HttpClient,public router:Router) {
    this.url = environment.url + "User";
  }

  login(pass,name,key): Observable<user> {
    this.key=key;
    return this.httpClient.get<user>(this.url + "/login/" + pass + "/" + name);
  }
logout(){
  console.log('key',this.key)
localStorage.removeItem(this.key)
// this.router.navigateByUrl('/login');

}
currentuser() {
  return localStorage.getItem(this.key)

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
  return(){
    console.log('keyy',this.key)
    this.router.navigateByUrl('/entry'+ JSON.parse(localStorage.getItem(this.key)).typeUser)
  }
}
