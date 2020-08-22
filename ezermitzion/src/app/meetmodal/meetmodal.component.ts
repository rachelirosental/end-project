import { Component, OnInit, Input } from '@angular/core';
import { dairy } from '../Data/dairy';
import { user } from '../Data/user';
import { DairyService } from '../shared/services/dairy.service';

@Component({
  selector: 'app-meetmodal',
  templateUrl: './meetmodal.component.html',
  styleUrls: ['./meetmodal.component.scss']
})
export class MeetmodalComponent implements OnInit {
  public dairy:dairy[]=[];
  @Input() user:user;
  constructor(public DairyService:DairyService) { }

  ngOnInit(): void {
    this.getdairybyuserid();
  }
  getdairybyuserid(){
    this.DairyService.getdairybyuserid(this.user.userId).subscribe((Dairy:dairy[])=>{this.dairy=Dairy;
      console.log(this.dairy);
    this.dairy.forEach(element => {
      element.start=new Date( element.start);
      element.end=new Date( element.end);
    
    });});
  }


}
