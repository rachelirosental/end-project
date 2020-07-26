import { Component, OnInit,Input } from '@angular/core';
import { Profession } from 'src/app/Data/Profession';
import { SubDomain } from 'src/app/Data/SubDomain';
import {ProfessionService } from '../shared/services/profession.service';
import { ActivatedRoute } from '@angular/router';
import { TypeProfessions } from '../Data/TypeProfessions';

@Component({
  selector: 'app-create-profession',
  templateUrl: './create-profession.component.html',
  styleUrls: ['./create-profession.component.scss']
})
export class CreateProfessionComponent implements OnInit {

  @Input() public profession=new Profession();
   public typeprofessions:TypeProfessions[];
   selectedtype:TypeProfessions;

  constructor(public ProfessionService:ProfessionService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.getTypeProfList();

  }
  getTypeProfList(){
    console.log('jjjjjjjj')
    this.ProfessionService.getTypeProfList().subscribe(res=>{
      console.log('jjjjjjjj')
      localStorage.setItem("typeprofessions",JSON.stringify(res)),
      this.typeprofessions=res,
      console.log('proffesionstype',this.typeprofessions)
    
    },err=>{
      alert("error")
    })
  }
  createnew(){
    this.ProfessionService.createnew(this.profession).subscribe(res=>
     console.log(res)
    ,err=>{
      alert("error")
    })
    
  }

}
