import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { user } from '../Data/user';
import { TypeUser } from '../Data/TypeUser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-setdetailuser',
  templateUrl: './setdetailuser.component.html',
  styleUrls: ['./setdetailuser.component.scss']
})
export class SetdetailuserComponent implements OnInit {
  
  @Input() public user:user;


  constructor(public userService:UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getUserById();
    console.log(this.user);
  }
  updateuser(){

    this.userService.update(this.user).subscribe(res=>console.log('res',this.user))
  }
  // getUserById(){
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.userService.getuserByid(id).subscribe(res=>{
  //     this.user=res,console.log('user',this.user)
  //   },err=>{
  //     alert("error")
  //   })
  // }
}
