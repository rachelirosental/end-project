import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss']
})
export class ProfessionsComponent implements OnInit {

  constructor(public router:Router,public UserService:UserService) { }

  ngOnInit(): void {
  }
  forlist(){
    this.router.navigateByUrl('/proflist');

  }
  getProfById(){

  }

  createnew(){
    this.router.navigateByUrl('/createnew');
  }
  next4(){
    this.router.navigateByUrl('/login');
  }

}
