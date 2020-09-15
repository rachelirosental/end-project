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
public imagePath;
  imgURL="http://simpleicon.com/wp-content/uploads/account.png";
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = String(reader.result); 
    }
  }


 public user=new user();
  constructor(public router: Router,public UserService:UserService) {

   }

  ngOnInit(): void {
    this.getTypeUserList();
    
  }
  add(){
 console.log(this.user);


    this.UserService.create(this.user).subscribe(res=>{
      localStorage.setItem("user2",JSON.stringify(res));
      
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
