import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalmeetsComponent } from '../modalmeets/modalmeets.component';
@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.scss']
})
export class SecretaryComponent implements OnInit {

  constructor(public Userservice:UserService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.openModal()
  }
  openModal(){
    const modalRef = this.modalService.open(ModalmeetsComponent);


    

  }

}
