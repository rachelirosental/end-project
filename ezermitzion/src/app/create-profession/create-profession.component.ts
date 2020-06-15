import { Component, OnInit,Input } from '@angular/core';
import { Profession } from 'src/app/Data/Profession';
import { SubDomain } from 'src/app/Data/SubDomain';
import {ProfessionService } from '../shared/services/profession.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-profession',
  templateUrl: './create-profession.component.html',
  styleUrls: ['./create-profession.component.scss']
})
export class CreateProfessionComponent implements OnInit {
//   subdomain=<SubDomain>{}
    
   public profession=<Profession>{}
// //   =  
// //  {
  
// //    profId  :null,
// //   profName:" ",
// //   type:1 ,
// //   kupa:1,
// //   tel:"  ",
// //   addTel:"",
// //   email:" ",
// //   privateAddres:" ",
// //   clinicAddres:"",
// //   subdomain:1,
// //   privateOpinion:" ",
// //   subdomain1:this.subdomain,

  
// //  };

  constructor(public ProfessionService:ProfessionService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('hello')
  }
  createnew(){
    this.ProfessionService.createnew(this.profession).subscribe(res=>
     console.log(res)
    ,err=>{
      alert("error")
    })
    
  }

}
