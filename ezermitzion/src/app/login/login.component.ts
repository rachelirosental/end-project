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
name:string;
password:any;
  constructor(public router: Router,public userService:UserService) { }

  ngOnInit() {
   
  }
  validation(){
    this.userService.login(this.password,this.name).subscribe(res=>{
      if(res==null)
      {
        Swal.fire('Oops...', 'Something went wrong!', 'error');
        return;
      }
      localStorage.setItem("user",JSON.stringify(res));
      this.router.navigateByUrl('/secretary');
    },err=>{
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    })
    
  }
  

 
  
}
