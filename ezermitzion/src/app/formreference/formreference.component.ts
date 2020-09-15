import { Component, OnInit } from '@angular/core';
import { Reference } from '../Data/reference';
import { ReferenceService } from '../shared/services/reference.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formreference',
  templateUrl: './formreference.component.html',
  styleUrls: ['./formreference.component.scss']
})
export class FormreferenceComponent implements OnInit {
public reference=new Reference();
  constructor(public router: Router,public ReferenceService:ReferenceService) { }

  ngOnInit(): void {
  }
  add(){
    this.ReferenceService.create(this.reference).subscribe(res=>{
      localStorage.setItem("user1",JSON.stringify(res));
      
    },err=>{
      alert("error")
    })
  }

}
