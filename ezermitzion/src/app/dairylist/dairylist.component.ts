import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { DairyService } from '../shared/services/dairy.service';
import { user } from '../Data/user';
@Component({
  selector: 'app-dairylist',
  templateUrl: './dairylist.component.html',
  styleUrls: ['./dairylist.component.scss']
})
export class DairylistComponent implements OnInit {

  constructor(public UserService:UserService,public DairyService:DairyService) { }
  users:user[];
  inputText:any;
  public user:user[]=[];
  ngOnInit(): void {
    this.loadUsers();
  }
  
  loadUsers(){
    this.UserService.getusers().subscribe((users:user[])=>{this.users=users;
    console.log('hello',this.users)});
  }
  search(){
 
    if(!this.inputText)
     {console.log('empty',this.inputText)
    this.loadUsers();
     } 
  console.log('input',this.inputText)
  
  
    var p = this.users.filter(
       (val)=> val.userName.includes(this.inputText)||val.email.includes(this.inputText)||val.tel.includes(this.inputText))
    
      this.users=p;
      console.log('user',this.users)
  
  }
   
  }
  

