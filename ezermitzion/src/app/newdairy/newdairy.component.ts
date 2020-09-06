import { Component, OnInit } from '@angular/core';

import { dairy } from '../Data/dairy';
import { title } from 'process';
import { user } from '../Data/user';
import { TypeMeeting } from '../Data/TypeMeeting';
import { Room } from '../Data/Room';
import { RoomService } from '../shared/services/room.service';
import { UserService} from '../shared/services/user.service';
import {DairyService} from '../shared/services/dairy.service';


@Component({
  selector: 'app-newdairy',
  templateUrl: './newdairy.component.html',
  styleUrls: ['./newdairy.component.scss']
})
export class NewdairyComponent implements OnInit {

  dairy: dairy = {
    dairyId: 1,
    description: " ",
    start: new Date(),
    end: new Date(),
    color: {
      secondary: "",
      primary: "",
    },
    userId: 1,
    title: "",
    typeMeeting: 1,
    users: new user(),
    typeMeeting1: new TypeMeeting(),
    rooms: new Room(),
    roomId: 1,
    label: "",
    onClick: ({ event }: { event: dairy }): void => {

    }

  };
  user:user[];
  roomslist: Room[];
typeMeeting:TypeMeeting[];
  constructor(public RoomService: RoomService,public UserService:UserService,public DairyService:DairyService) { }

  ngOnInit(): void {
    this.getNameUserList();
    this.getTypemeetList();
  }
  getroomlist() {
    debugger;
    console.log('hellllll');
    this.dairy.end=new Date(this.dairy.end);
    this.dairy.start=new Date(this.dairy.start);
    this.RoomService.getlistrooms(this.dairy).subscribe((res: Room[]) => {
      localStorage.setItem("roomslist", JSON.stringify(res))
      this.roomslist = res,
        console.log(this.roomslist)
    });
  }
  addNew(){
    this.dairy.end=new Date(this.dairy.end);
    this.dairy.start=new Date(this.dairy.start);
    this.DairyService.create(this.dairy).subscribe(res=>{
      localStorage.setItem("dairy",JSON.stringify(res));
    },err=>{
      alert("error")
    })
    
  }

  getNameUserList(){
    
    this.UserService.getusers().subscribe(res=>{
      localStorage.setItem("user",JSON.stringify(res)),
      this.user=res,console.log('user',this.user)
      
    },err=>{
      alert("error")
    })
  }
  getTypemeetList(){
    
    this.DairyService.getTypeMeetList().subscribe(res=>{
      localStorage.setItem("typereference",JSON.stringify(res)),
      this.typeMeeting=res,console.log('typereference',this.typeMeeting)
      
    },err=>{
      alert("error")
    })
  }
 
}


