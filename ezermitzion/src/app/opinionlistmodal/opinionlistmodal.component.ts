import { Component, OnInit,Input } from '@angular/core';
import { opinion } from '../Data/Opinion';
import { OpinionService } from '../shared/services/opinion.service';
import { Profession } from '../Data/Profession';


@Component({
  selector: 'app-opinionlistmodal',
  templateUrl: './opinionlistmodal.component.html',
  styleUrls: ['./opinionlistmodal.component.scss']
})
export class OpinionlistmodalComponent implements OnInit {
 public Opinion:opinion
 public opinions:opinion[]=[]
  @Input() profession:Profession;

  constructor(public OpinionService:OpinionService) { }

  ngOnInit(): void {
    this.getopinionbyprofid();
  }
  getOpinionList(){
    this.OpinionService.getOpinionList().subscribe(res=>{
      localStorage.setItem("professions",JSON.stringify(res)),
      this.opinions=res,console.log('proffesions',this.opinions)
    
    },err=>{
      alert("error")
    })
  }
  getopinionbyprofid(){
    this.OpinionService.getOpinionbyprofid(this.profession.profId).subscribe((Opinions:opinion[])=>{this.opinions=Opinions;
      console.log(this.opinions);
    this.opinions.forEach(element => {
      element.date=new Date( element.date);
    
    });});
  }

}
