import { Component, OnInit } from '@angular/core';
import { MeetcounselerComponent } from '../meetcounseler/meetcounseler.component';
import { Room } from '../Data/Room';
import { user } from '../Data/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalmeetsComponent } from '../modalmeets/modalmeets.component';

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
    this.openModal();
  }
  openModal(){
    const modalRef = this.modalService.open(ModalmeetsComponent);

}
}