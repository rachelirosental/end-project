import { Component, OnInit } from '@angular/core';
import { Room } from '../Data/Room';
import { RoomService } from '../shared/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
public room:Room;
  constructor(public RoomService:RoomService) { }

  ngOnInit(): void {
  }
  addroom(){
    this.RoomService.create(this.room).subscribe(res=>{
      localStorage.setItem("user",JSON.stringify(res));
      
    },err=>{
      alert("error")
    })
    
  }


}
