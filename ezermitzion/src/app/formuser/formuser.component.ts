import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';
@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent implements OnInit {

  
 public user: user = {
    userId:1,
        userFname:" ", 
        userLname:" ",
        tel:" ",
        email:" ", 
        password :" ",
        typeUser:{
          TypeId:1,
          TypeName:" "
        }
  };
  // public user:user;
  constructor(public router: Router,public userService:UserService) {

   }

  ngOnInit(): void {
  }
  add(){
 console.log(this.user);


    this.userService.create(this.user).subscribe(res=>{
      localStorage.setItem("user",JSON.stringify(res));
      
    },err=>{
      alert("error")
    })
    
  }

}
