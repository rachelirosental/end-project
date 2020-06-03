import { Component, OnInit, Input } from '@angular/core';
import { Profession } from 'src/app/Data/Profession';
import {ProfessionService } from '../shared/services/profession.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profession-detials',
  templateUrl: './profession-detials.component.html',
  styleUrls: ['./profession-detials.component.scss']
})
export class ProfessionDetialsComponent implements OnInit {

  @Input() public profession:Profession;
 

  
  constructor(public ProfessionService:ProfessionService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  getProfById(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.ProfessionService.getProfById(id).subscribe(res=>{
      this.profession=res,console.log('profession',this.profession)
    },err=>{
      alert("error")
    })
  }

  updateprofession(){
    this.ProfessionService.update(this.profession).subscribe(res=>console.log(res))

  }

}

