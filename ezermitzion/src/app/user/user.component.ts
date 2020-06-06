import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SetdetailuserComponent } from '../setdetailuser/setdetailuser.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

users:user[];
user:any;
inputText:any;
  inputdelete:any;

  constructor(private httpClient:HttpClient,public userService:UserService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.userService.getusers().subscribe((users:user[])=>{this.users=users;
    console.log(this.users)});
  }

deleteUser(id:number){
  this.userService.delete(id).subscribe(res=>{
   this.loadUsers();
    console.log(res)
  },err=>{
    alert("error")
  })
  
}
next(u:user){
  const modalRef = this.modalService.open(SetdetailuserComponent);
  modalRef.componentInstance.user = u;
}


getuserById(){
  this.userService.getuserByid(Number(this.inputText)).subscribe(res=>{
    this.user=res,console.log('user',this.user)
  },err=>{
    alert("error")
  })
}

search(){
 
  if(!this.inputText)
   {console.log('empty',this.inputText)
  this.loadUsers();
   } 
console.log('input',this.inputText)


  var p = this.users.filter(
     (val)=> val.userFname.includes(this.inputText)||val.userLname.includes(this.inputText)||val.tel.includes(this.inputText))
   

    this.users=p;
    console.log('user',this.users)

}

}
