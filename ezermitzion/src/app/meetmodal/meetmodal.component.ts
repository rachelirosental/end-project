import { Component, OnInit, Input } from '@angular/core';
import { dairy } from '../Data/dairy';
import { user } from '../Data/user';
import { DairyService } from '../shared/services/dairy.service';
import { Room } from '../Data/Room';

@Component({
  selector: 'app-meetmodal',
  templateUrl: './meetmodal.component.html',
  styleUrls: ['./meetmodal.component.scss']
})
export class MeetmodalComponent implements OnInit {
  public dairy:dairy[]=[];
  @Input() room:Room;
  constructor(public DairyService:DairyService) { }

  ngOnInit(): void {
    this.getdairybyuserid();
  }
  getdairybyuserid(){
    this.DairyService.getdairybyuserid(this.room.roomId).subscribe((Dairy:dairy[])=>{this.dairy=Dairy;
      console.log(this.dairy);
    this.dairy.forEach(element => {
      element.start=new Date( element.start);
      element.end=new Date( element.end);
    
    });});
  }


}
