import { Component, OnInit } from '@angular/core';

import { dairy } from '../Data/dairy';
import { title } from 'process';
import { user } from '../Data/user';
import { TypeMeeting } from '../Data/TypeMeeting';
import { Room } from '../Data/Room';

@Component({
  selector: 'app-newdairy',
  templateUrl: './newdairy.component.html',
  styleUrls: ['./newdairy.component.scss']
})
export class NewdairyComponent implements OnInit {
dairy:dairy;  
// dairy:dairy={
//   dairyId:1,
//   description:" ",
//   start:new Date(),
//  end:new Date(),
//  color:{
//     secondary:"",
//     primary:"",
//   },
//   title:"",
//   typeMeeting:1,
//   user:new user(),
//   typeMeeting1:new TypeMeeting(),
//   rooms:new Room(),
//   roomId:1,
//   label:"",
 

// };
  constructor() { }

  ngOnInit(): void {
  }

}
