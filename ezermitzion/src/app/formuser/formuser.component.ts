import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';
import {TypeUser} from 'src/app/Data/TypeUser'

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent implements OnInit {
public typeUser:TypeUser[];


 public user=new user();
  constructor(public router: Router,public UserService:UserService) {

   }

  ngOnInit(): void {
    this.getTypeUserList();
  }
  add(){
 console.log(this.user);


    this.UserService.create(this.user).subscribe(res=>{
      localStorage.setItem("user",JSON.stringify(res));
      
    },err=>{
      alert("error")
    })
    
  }
  getTypeUserList(){
    
    this.UserService.getTypeUserList().subscribe(res=>{
      localStorage.setItem("typeuser",JSON.stringify(res)),
      this.typeUser=res,console.log('typeuser',this.typeUser)
      
    },err=>{
      alert("error")
    })
  }

}
