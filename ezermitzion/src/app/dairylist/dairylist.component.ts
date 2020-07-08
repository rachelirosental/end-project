import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';
@Component({
  selector: 'app-dairylist',
  templateUrl: './dairylist.component.html',
  styleUrls: ['./dairylist.component.scss']
})
export class DairylistComponent implements OnInit {

  constructor(public UserService:UserService) { }
  users:user[]
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.UserService.getusers().subscribe((users:user[])=>{this.users=users;
    console.log('hello',this.users)});
  }

}
