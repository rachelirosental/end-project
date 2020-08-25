import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalmeetsComponent } from '../modalmeets/modalmeets.component';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.openModal();
  }
  openModal(){
    const modalRef = this.modalService.open(ModalmeetsComponent);
}
}
