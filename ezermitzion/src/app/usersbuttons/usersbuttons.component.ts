import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';

@Component({
  selector: 'app-usersbuttons',
  templateUrl: './usersbuttons.component.html',
  styleUrls: ['./usersbuttons.component.scss']
})
export class UsersbuttonsComponent implements OnInit {
user:user;
users:user[];
  constructor(private router: Router,public UserService:UserService) { }

  ngOnInit(): void {
  }
  next1(){
    
    this.router.navigateByUrl('/user');
 }
 next2(){
  this.router.navigateByUrl('/formuser');
}
next4(){
  this.router.navigateByUrl('/login');
}
  }