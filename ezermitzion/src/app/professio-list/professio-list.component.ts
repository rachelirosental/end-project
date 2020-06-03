import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/Data/Profession';
import {ProfessionService } from '../shared/services/profession.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfessionDetialsComponent } from '../profession-detials/profession-detials.component';



@Component({
  selector: 'app-professio-list',
  templateUrl: './professio-list.component.html',
  styleUrls: ['./professio-list.component.scss']
})
export class ProfessioListComponent implements OnInit {
  inputText:any;
  inputdelete:any;
public professions:Profession[]= []
public profession:Profession;


 constructor(public ProfessionService:ProfessionService,private modalService: NgbModal  ){ }

  ngOnInit(): void {
    this.getProfList();
   }
   getProfList(){

    this.ProfessionService.getProfList().subscribe(res=>{
      localStorage.setItem("professions",JSON.stringify(res)),
      this.professions=res,console.log('proffesions',this.professions)
    },err=>{
      alert("error")
    })
    
    }
    getProfById(){
      this.ProfessionService.getProfById(Number(this.inputText)).subscribe(res=>{
        this.profession=res,console.log('profession',this.profession)
      },err=>{
        alert("error")
      })
    }

deleteprofession(index){
  this.ProfessionService.delete(Number(this.inputdelete)).subscribe(res=>{
    console.log(res)
  },err=>{
    alert("error")
  })
}
search(){
 
  if(!this.inputText)
   {console.log('empty',this.inputText)
  this.getProfList ();
   } 
console.log('input',this.inputText)

//   if(Number(this.inputText))
//  {var p = this.professions.filter(
//       (val)=> val.tel.includes(this.inputText))
// //      console.log('find',p)}
// else{
  var p = this.professions.filter(
     (val)=> val.profName.includes(this.inputText)||val.privateAddres.includes(this.inputText)||val.tel.includes(this.inputText))
    // }  console.log('find',p)

    this.professions=p;
    console.log('prof',this.professions)

}
openModal(p:Profession) {
  const modalRef = this.modalService.open(ProfessionDetialsComponent);
  modalRef.componentInstance.profession = p;
  }
 

}


