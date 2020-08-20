import { Component, OnInit, Input } from '@angular/core';
import { opinion } from '../Data/Opinion';
import { Profession } from '../Data/Profession';
import { OpinionlistmodalComponent } from '../opinionlistmodal/opinionlistmodal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {OpinionService } from '../shared/services/opinion.service';

@Component({
  selector: 'app-opinionmaodal',
  templateUrl: './opinionmaodal.component.html',
  styleUrls: ['./opinionmaodal.component.scss']
})
export class OpinionmaodalComponent implements OnInit {
  public opinion:opinion=new opinion();
  @Input() public opinions:opinion[]=[];
  @Input() public profession:Profession;
  constructor(public Opinionservice:OpinionService,private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  addopinion(){
    console.log(this.opinion);

this.opinion.profPersonid=this.profession.profId;
console.log("op",this.opinion);
    this.Opinionservice.create(this.opinion).subscribe(res=>{
      localStorage.setItem("opinion",JSON.stringify(res));
      
    },err=>{
      alert("error")
    })
    
  }
  listopinion(p:Profession){
    const modalRef = this.modalService.open(OpinionlistmodalComponent);
    modalRef.componentInstance.profession = {...p};
  //   modalRef.result.then(res=>{
  //     this.getOpinionList();
  //   },err=>{
  //     this.getOpinionList();
  //   })
  // }
  }
}
