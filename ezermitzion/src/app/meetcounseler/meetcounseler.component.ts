import { Component, OnInit, Input } from '@angular/core';
import { user } from '../Data/user';
import { dairy } from '../Data/dairy';
import { DairyService } from '../shared/services/dairy.service';

@Component({
  selector: 'app-meetcounseler',
  templateUrl: './meetcounseler.component.html',
  styleUrls: ['./meetcounseler.component.scss']
})
export class MeetcounselerComponent implements OnInit {
  @Input() user:user;
  public dairy1:dairy
  public dairy:dairy[]=[];
  constructor(public DairyService:DairyService) { }

  ngOnInit(): void {
    this.getmeetbyuserid();
  }
  getmeetbyuserid(){
    this.DairyService.getmeetbyuserid(this.user.userId).subscribe((Dairy:dairy[])=>{this.dairy=Dairy;
      console.log(this.dairy);
    this.dairy.forEach(element => {
      element.start=new Date( element.start);
      element.end=new Date( element.end);
    
    });});
  }

}
