
import { Component, OnInit, Input } from '@angular/core';
import { Profession } from '../Data/Profession';
import { user } from '../Data/user';
import { Reference } from '../Data/Reference';
import { ReferenceService } from '../shared/services/reference.service';
@Component({
  selector: 'app-newmodalref',
  templateUrl: './newmodalref.component.html',
  styleUrls: ['./newmodalref.component.scss']
})
export class NewmodalrefComponent implements OnInit {
@Input() profession:Profession
@Input() user:user
references:Reference[]
  constructor(public  ReferenceService: ReferenceService) { }

  ngOnInit(): void {
    this.getrefbyprofid();
    //this.getrefbyuserid();
  }
  getrefbyprofid(){
    this.ReferenceService.getrefbyprofid(this.profession.profId).subscribe((references:Reference[])=>{this.references=references;
      console.log(this.references);
    this.references.forEach(element => {
      element.bornDate=new Date( element.bornDate);
      element.bornDate=new Date( element.date);
    });});
  }
  getrefbyuserid(){
    this.ReferenceService.getrefbyuserid(this.user.userId).subscribe((references:Reference[])=>{this.references=references;
      console.log(this.references);
    this.references.forEach(element => {
      element.bornDate=new Date( element.bornDate);
      element.bornDate=new Date( element.date);
    });});
  }

}

