import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-referencebuttons',
  templateUrl: './referencebuttons.component.html',
  styleUrls: ['./referencebuttons.component.scss']
})
export class ReferencebuttonsComponent implements OnInit {

  constructor(private router: Router,public UserService:UserService) { }

  ngOnInit(): void {
  }
  next1(){
    
    this.router.navigateByUrl('/reference');
 }
 next2(){
  this.router.navigateByUrl('/formreference');
}

next4(){
  this.router.navigateByUrl('/login');
}

}
