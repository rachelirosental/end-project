import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';
import {TypeProfessions} from 'src/app/Data/TypeProfessions'

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent implements OnInit {

  
//  public user:<user>: {
//     userId:1,
//         userFname:" ", 
//         userLname:" ",
//         tel:" ",
//         email:" ", 
//         password :" ",
//          typeId:1,
//          typeName:" "
       
        

//   };

 public user:user;
  constructor(public router: Router,public UserService:UserService) {

   }

  ngOnInit(): void {
  }
  add(){
 console.log(this.user);


    this.UserService.create(this.user).subscribe(res=>{
      localStorage.setItem("user",JSON.stringify(res));
      
    },err=>{
      alert("error")
    })
    
  }

}
