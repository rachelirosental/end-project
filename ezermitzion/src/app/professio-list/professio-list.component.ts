import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/Data/Profession';
import {ProfessionService } from '../shared/services/profession.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfessionDetialsComponent } from '../profession-detials/profession-detials.component';
import {TypeProfessions } from 'src/app/Data/TypeProfessions';
import {opinion } from 'src/app/Data/Opinion';
import { CreateProfessionComponent } from '../create-profession/create-profession.component';
import { OpinionmaodalComponent } from '../opinionmaodal/opinionmaodal.component';
import { Router } from '@angular/router';
import {UserService } from '../shared/services/user.service';
import { NewmodalrefComponent } from '../newmodalref/newmodalref.component';



@Component({
  selector: 'app-professio-list',
  templateUrl: './professio-list.component.html',
  styleUrls: ['./professio-list.component.scss']
})
export class ProfessioListComponent implements OnInit {
  inputText:any;
  inputdelete:any;
public professions:Profession[]= [];
public profession:Profession;
public opinion:opinion;
public opinions:opinion[]=[];



 constructor(public ProfessionService:ProfessionService, private modalService: NgbModal ,public router:Router,public UserService:UserService  ){ }

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
        this.profession=res,console.log('profession',this.profession.typeProfessions.nameprofession)
      },err=>{
        alert("error")
      })
    }

deleteprofession(id:number){
  
  var answer = window.confirm("האם אתה בטוח שברצונך למחוק איש מקצוע זה?");
if (answer) {
  this.ProfessionService.delete(id).subscribe(res=>{
    debugger;
    this.getProfList();
    console.log(res)
  },err=>{
    this.getProfList();
    alert("error")
  })
}
else {
    
}
  
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
  modalRef.componentInstance.profession = {...p};
  modalRef.result.then(res=>{
    this.getProfList();
  },err=>{
    this.getProfList();
  })
  
  }
create(){
    const modalRef = this.modalService.open(CreateProfessionComponent);
    modalRef.result.then(res=>{
      this.getProfList();
    },err=>{
      this.getProfList();
    })
   
  }
  openModalref(p:Profession){
    const modalRef = this.modalService.open(NewmodalrefComponent,{size: 'lg', windowClass: 'modal-xl'});
    modalRef.componentInstance.profession = {...p};
    modalRef.result.then(res=>{
      this.getProfList();
    },err=>{
      this.getProfList();
    })
    

  }
  openModalopinion(p:Profession){
    const modalRef = this.modalService.open(OpinionmaodalComponent);
    modalRef.componentInstance.profession ={...p} ;
    
  }

 }





