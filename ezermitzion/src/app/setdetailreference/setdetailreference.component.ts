import { Component, OnInit, Input } from '@angular/core';
import { ReferenceService } from '../shared/services/reference.service';
import { Reference } from '../Data/reference';
import { ActivatedRoute } from '@angular/router';
import { user } from '../Data/user';
import { Profession } from '../Data/Profession';
import { TypeReference } from '../Data/TypeReference';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { ProfessionService } from '../shared/services/profession.service';

@Component({
  selector: 'app-setdetailreference',
  templateUrl: './setdetailreference.component.html',
  styleUrls: ['./setdetailreference.component.scss']
})
export class SetdetailreferenceComponent implements OnInit {
  @Input() public reference:Reference;
  public user:user[];
  public profession:Profession[];
  public typereference:TypeReference[];
iscare= [
    { namee: true, name: "כן" },
    { namee: true, name: "לא" },
  ]

  constructor(public router: Router,public UserService:UserService,public ReferenceService:ReferenceService,public ProfessionService:ProfessionService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.getRefById();
    this.getNameUserList();
    this.getTypeRefList();
    this.getNameProfList();
  }
  updateuser(){

    this.ReferenceService.update(this.reference).subscribe(res=>console.log('res',this.reference))
  }
  getRefById(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.ReferenceService.getRefByid(id).subscribe(res=>{
      this.reference=res,console.log('reference',this.reference)
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
