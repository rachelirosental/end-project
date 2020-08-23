import { Component, OnInit,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string;
password:any;
show: boolean;
  public key='user'
  constructor(public router: Router,public userService:UserService) {
    this.show = false;
   }

  ngOnInit() {
   
  }
  password1() {
    this.show = !this.show;
}
  validation(){
    
    this.userService.login(this.password,this.email,this.key).subscribe(res=>{
      if(res==null)
      {
        Swal.fire('Oops...', 'Something went wrong!', 'error');
        return;
      }
      localStorage.setItem(this.key,JSON.stringify(res));
      console.log(res)
       this.router.navigateByUrl('/entry'+res.typeUser);
    },err=>{
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    })
    
  }
  
 
}
