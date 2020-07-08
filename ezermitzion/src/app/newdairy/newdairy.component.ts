import { Component, OnInit } from '@angular/core';

import { dairy } from '../Data/dairy';

@Component({
  selector: 'app-newdairy',
  templateUrl: './newdairy.component.html',
  styleUrls: ['./newdairy.component.scss']
})
export class NewdairyComponent implements OnInit {
dairy:dairy;
  constructor() { }

  ngOnInit(): void {
  }

}
