import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.scss']
})
export class SecretaryComponent implements OnInit {

  constructor(public Userservice:UserService) { }

  ngOnInit(): void {
    
  }
 

    

  }


