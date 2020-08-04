import { Component, OnInit, Input } from '@angular/core';
import { ReferenceService } from '../shared/services/reference.service';
import { Reference } from '../Data/reference';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-setdetailreference',
  templateUrl: './setdetailreference.component.html',
  styleUrls: ['./setdetailreference.component.scss']
})
export class SetdetailreferenceComponent implements OnInit {
  @Input() public reference:Reference;
  constructor(public ReferenceService:ReferenceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.getRefById();
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

}
