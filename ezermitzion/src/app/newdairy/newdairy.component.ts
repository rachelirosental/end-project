import { Component, OnInit } from '@angular/core';

import { dairy } from '../Data/dairy';
import { title } from 'process';
import { user } from '../Data/user';
import { TypeMeeting } from '../Data/TypeMeeting';
import { Room } from '../Data/Room';
import { RoomService } from '../shared/services/room.service';

@Component({
  selector: 'app-newdairy',
  templateUrl: './newdairy.component.html',
  styleUrls: ['./newdairy.component.scss']
})
export class NewdairyComponent implements OnInit {

dairy:dairy={
  dairyId:1,
  description:" ",
  start:new Date(),
  end:new Date(),
  color:{
    secondary:"",
    primary:"",
  },
  title:"",
  typeMeeting:1,
  user:new user(),
  typeMeeting1:new TypeMeeting(),
  rooms:new Room(),
  roomId:1,
  label:"",
  onClick: ({ event }: { event: dairy}): void => {

  }

};
roomslist:Room[]
  constructor(public RoomService :RoomService ) { }

  ngOnInit(): void {
  }
  getroomlist(){  
    console.log('hellllll')
    this. RoomService.getlistrooms(this.dairy.start,this.dairy.end).subscribe((res:Room[])=>{
      localStorage.setItem("roomslist",JSON.stringify(res))
      this.roomslist=res,
    console.log(this.roomslist)});
  }
    

  }


