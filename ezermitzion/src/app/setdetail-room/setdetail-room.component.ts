import { Component, OnInit,Input } from '@angular/core';
import { RoomService } from '../shared/services/room.service';
import { Room } from '../Data/Room';

@Component({
  selector: 'app-setdetail-room',
  templateUrl: './setdetail-room.component.html',
  styleUrls: ['./setdetail-room.component.scss']
})
export class SetdetailRoomComponent implements OnInit {

  constructor(public roomService:RoomService) { }
  @Input() public room:Room=new Room();
  
  ngOnInit(): void {
  }
  updateRoom(){

    this.roomService.update(this.room).subscribe(res=>console.log('res',this.room))
  }

}
