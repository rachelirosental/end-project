import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReferenceService } from '../shared/services/reference.service';
import { UserService } from '../shared/services/user.service';
import { Reference } from '../Data/Reference';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SetdetailreferenceComponent } from '../setdetailreference/setdetailreference.component';
import { FormRefComponent } from '../form-ref/form-ref.component';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  references:Reference[];
  reference:any;
  inputText:any;
 
  constructor(private router: Router,private httpClient:HttpClient,public ReferenceService:ReferenceService,public UserService:UserService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadReferences();
  }
  loadReferences(){
 
    console.log(JSON.parse(localStorage.getItem("user")).userId)
    this.ReferenceService.getrefbyuserid(JSON.parse(localStorage.getItem("user")).userId).subscribe((references:Reference[])=>{this.references=references;
    console.log(this.references);
  this.references.forEach(element => {
    element.bornDate=new Date( element.bornDate);
    element.bornDate=new Date( element.date);
  });});
  }
  deleteReference(id:number){
    var answer = window.confirm("האם אתה בטוח שברצונך למחוק פניה זו?");
if (answer) {
  this.ReferenceService.delete(id).subscribe(res=>{
    this.loadReferences();
     console.log(res)
   },err=>{
     alert("error")
   })
}
else {
    //some code
}
    
    
  }
  next(r:Reference){
    const modalRef = this.modalService.open(SetdetailreferenceComponent);
 
    modalRef.componentInstance.reference = {...r};
    modalRef.result.then(res=>{
      this.loadReferences();
    },err=>{
      this.loadReferences();
    })
  }
  next1(){
    const modalRef = this.modalService.open(FormRefComponent);
    modalRef.result.then(res=>{
      this.loadReferences();
    },err=>{
      this.loadReferences();
    })
  }
  
  search(){
 
    if(!this.inputText)
     {console.log('empty',this.inputText)
    this.loadReferences();
     } 
  console.log('input',this.inputText)
  
  }
  chart(){
    this.router.navigateByUrl('/piechart');
  }
  

}
