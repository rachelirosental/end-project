import { Component, OnInit } from '@angular/core';
import { Reference } from '../Data/reference';
import { user } from '../Data/user';
import { Profession } from '../Data/Profession';
import { TypeReference } from '../Data/TypeReference';
import { Router } from '@angular/router';
import { ReferenceService } from '../shared/services/reference.service';
import { UserService } from '../shared/services/user.service';
import { ProfessionService } from '../shared/services/profession.service';


@Component({
  selector: 'app-form-ref',
  templateUrl: './form-ref.component.html',
  styleUrls: ['./form-ref.component.scss']
})
export class FormRefComponent implements OnInit {
  public reference=new Reference();
  public user:user[];
  public profession:Profession[];
  public typereference:TypeReference[];
  iscare= [
    { namee: true, name: "כן" },
    { namee: true, name: "לא" },
  
  ]
  constructor(public router: Router,public UserService:UserService,public ReferenceService:ReferenceService,public ProfessionService:ProfessionService) { }

  ngOnInit(): void {
    this.getNameUserList();
    this.getTypeRefList();
    this.getNameProfList();
  }
  add(){
    
       this.ReferenceService.create(this.reference).subscribe(res=>{
         localStorage.setItem("reference",JSON.stringify(res));
         
       },err=>{
         alert("error")
       })
       
     }
 
     getNameUserList(){
    
      this.UserService.getusers().subscribe(res=>{
        localStorage.setItem("user",JSON.stringify(res)),
        this.user=res,console.log('user',this.user)
        
      },err=>{
        alert("error")
      })
    }
    getNameProfList(){
    
      this.ProfessionService.getProfList().subscribe(res=>{
        localStorage.setItem("profession",JSON.stringify(res)),
        this.profession=res,console.log('profession',this.profession)
        
      },err=>{
        alert("error")
      })
    }
    getTypeRefList(){
    
      this.ReferenceService.getTypeRefList().subscribe(res=>{
        localStorage.setItem("typereference",JSON.stringify(res)),
        this.typereference=res,console.log('typereference',this.typereference)
        
      },err=>{
        alert("error")
      })
    }
   

}
