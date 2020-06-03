import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-setdetailuser',
  templateUrl: './setdetailuser.component.html',
  styleUrls: ['./setdetailuser.component.scss']
})
export class SetdetailuserComponent implements OnInit {
  public user: user = {
    userId:1,
        userFname:" ", 
        userLname:" ",
        tel:" ",
        email:" ", 
        password :" ",
        typeUser:1
  };
  constructor(public userService:UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserById();
  }
  updateuser(){

    this.userService.update(this.user).subscribe(res=>console.log(res))
  }
  getUserById(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getuserByid(id).subscribe(res=>{
      this.user=res,console.log('user',this.user)
    },err=>{
      alert("error")
    })
  }
}