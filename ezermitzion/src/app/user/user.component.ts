import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SetdetailuserComponent } from '../setdetailuser/setdetailuser.component';
import { TypeUser } from '../Data/TypeUser';
import { FormuserComponent } from '../formuser/formuser.component';
import { ReferencemodalComponent } from '../referencemodal/referencemodal.component';
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
  

  constructor(private router: Router,private httpClient:HttpClient,public UserService:UserService,private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this.loadUsers();
  }
  loadUsers(){
    this.UserService.getusers().subscribe((users:user[])=>{this.users=users;
    console.log(this.users)});
  }

deleteUser(id:number){
  this.UserService.delete(id).subscribe(res=>{
   this.loadUsers();
    console.log(res)
  },err=>{
    alert("error")
  })
  
}
next(u:user){
  const modalRef = this.modalService.open(SetdetailuserComponent);
  modalRef.componentInstance.user ={...u} ;
  modalRef.result.then(res=>{
    this.loadUsers();
  },err=>{
    this.loadUsers();
  })
 
}
addnewuser(){
  const modalRef = this.modalService.open(FormuserComponent);
  modalRef.result.then(res=>{
    this.loadUsers();
  },err=>{
    this.loadUsers();
  })
 
}


getuserById(){
  this.UserService.getuserByid(Number(this.inputText)).subscribe(res=>{
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
     (val)=> val.userName.includes(this.inputText)||val.email.includes(this.inputText)||val.tel.includes(this.inputText))
  
    this.users=p;
    console.log('user',this.users)

}
chart(){
  this.router.navigateByUrl('/grafchart');
}
openModalref(u:user){
  const modalRef = this.modalService.open(ReferencemodalComponent,{size: 'lg', windowClass: 'modal-xl'});
  modalRef.componentInstance.user = {...u};
  modalRef.result.then(res=>{
    this.loadUsers();
  },err=>{
    this.loadUsers();
  })

}}
