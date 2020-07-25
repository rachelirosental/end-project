import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { user } from 'src/app/Data/user';
import { UserService } from './shared/services/user.service';
import{ Router,CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot}from   '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard
{
constructor( public userservice:UserService,public router:Router){}
    
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
{
  if(this.userservice.currentuser())
    return true;
    this.router.navigateByUrl('/login');
  }
}
