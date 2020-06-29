import { Component, OnInit } from '@angular/core';;
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RoomService } from '../shared/services/room.service';
import { Room } from '../Data/Room';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SetdetailreferenceComponent } from '../setdetailreference/setdetailreference.component';
@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {
rooms:Room[];
  constructor(public RoomService:RoomService ) { }

  ngOnInit(): void {
    this.getrooms();

  }
  getrooms(){
    this. RoomService.getrooms().subscribe((res:Room[])=>{
      localStorage.setItem("rooms",JSON.stringify(res))
      this.rooms=res,
    console.log(this.rooms)});
  }

}
