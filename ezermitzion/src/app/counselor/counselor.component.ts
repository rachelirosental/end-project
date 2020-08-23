import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.scss']
})
export class CounselorComponent implements OnInit {
public userid:number
  constructor() {
    this.userid=JSON.parse(localStorage.getItem("user")).userId }

  ngOnInit(): void {
  }

}
