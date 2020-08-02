import { Component, OnInit } from '@angular/core';;
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RoomService } from '../shared/services/room.service';
import { Room } from '../Data/Room';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoomsComponent } from '../rooms/rooms.component';
import { SetdetailRoomComponent } from '../setdetail-room/setdetail-room.component';
import { SetdetailreferenceComponent } from '../setdetailreference/setdetailreference.component';
@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {
rooms:Room[];
room:Room;
  constructor(public RoomService:RoomService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getrooms();

  }
  getrooms(){
    this. RoomService.getrooms().subscribe((res:Room[])=>{
      localStorage.setItem("rooms",JSON.stringify(res))
      this.rooms=res,
    console.log(this.rooms)});
  }
  addnewroom(){
    const modalRef = this.modalService.open(RoomsComponent);
    modalRef.result.then(res=>{
      this.getrooms();
    },err=>{
      this.getrooms();
    })
 
  }
  deleteRoom(id:number){
    this.RoomService.delete(id).subscribe(res=>{
     this.getrooms();
      console.log(res)
    },err=>{
      alert("error")
    })
    
  }
  next(r:Room){
    const modalRef = this.modalService.open(SetdetailRoomComponent);
    modalRef.componentInstance.Room = {...r};
    modalRef.result.then(res=>{
      this.getrooms();
    },err=>{
      this.getrooms();
    })
  }
}
