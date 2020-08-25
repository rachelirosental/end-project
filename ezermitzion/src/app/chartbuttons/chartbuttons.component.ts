import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-chartbuttons',
  templateUrl: './chartbuttons.component.html',
  styleUrls: ['./chartbuttons.component.scss']
})
export class ChartbuttonsComponent implements OnInit {

  constructor(public UserService:UserService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
