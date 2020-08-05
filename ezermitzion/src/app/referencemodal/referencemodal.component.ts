import { Component, OnInit, Input } from '@angular/core';
import { Profession } from '../Data/Profession';
import { Reference } from '../Data/Reference';
import { ReferenceService } from '../shared/services/reference.service';
@Component({
  selector: 'app-referencemodal',
  templateUrl: './referencemodal.component.html',
  styleUrls: ['./referencemodal.component.scss']
})
export class ReferencemodalComponent implements OnInit {
@Input() profession:Profession
references:Reference[]
  constructor(public  ReferenceService: ReferenceService) { }

  ngOnInit(): void {
    this.getrefbyprofid()
  }
  getrefbyprofid(){
    this.ReferenceService.getrefbyprofid(this.profession.profId).subscribe((references:Reference[])=>{this.references=references;
      console.log(this.references);
    this.references.forEach(element => {
      element.bornDate=new Date( element.bornDate);
      element.bornDate=new Date( element.date);
    });});
  }

}
