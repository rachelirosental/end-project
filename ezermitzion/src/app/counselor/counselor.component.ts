import { Component, OnInit } from '@angular/core';
import { MeetcounselerComponent } from '../meetcounseler/meetcounseler.component';
import { Room } from '../Data/Room';
import { user } from '../Data/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.scss']
})
export class CounselorComponent implements OnInit {
public userid:number;
user:user;

  constructor(private modalService: NgbModal) {
    this.userid=JSON.parse(localStorage.getItem("user")).userId }

  ngOnInit(): void {
    // this.openModalmeetcounselor(this.user);
  }
  openModalmeetcounselor(u:user){
    const modalRef = this.modalService.open(MeetcounselerComponent);
    modalRef.componentInstance.user = {...u};
    // modalRef.result.then(res=>{
    //   this.getProfList();
    // },err=>{
    //   this.getProfList();
    // })
    

  }

}
