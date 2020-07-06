import { Component, OnInit } from '@angular/core';
import { Reference } from '../Data/reference';
import { Router } from '@angular/router';
import { ReferenceService } from '../shared/services/reference.service';


@Component({
  selector: 'app-form-ref',
  templateUrl: './form-ref.component.html',
  styleUrls: ['./form-ref.component.scss']
})
export class FormRefComponent implements OnInit {
  public reference=new Reference();
  constructor(public router: Router,public UserService:ReferenceService) { }

  ngOnInit(): void {
  }
  add(){
    
   
   
       this.UserService.create(this.reference).subscribe(res=>{
         localStorage.setItem("reference",JSON.stringify(res));
         
       },err=>{
         alert("error")
       })
       
     }
   

}
