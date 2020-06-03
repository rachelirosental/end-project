import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss']
})
export class ProfessionsComponent implements OnInit {

  constructor(public router:Router) { }

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

}
