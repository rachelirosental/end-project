import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public images:string[]=[];
  public number:number=1;
 

  
  constructor() {  setInterval(()=> { this.setActiveImage() }, 3000); }

  ngOnInit(): void {
   
  }
  setActiveImage() {
    this.number = this.number+1;
    if(this.number==11)
    this.number=1;
}}
