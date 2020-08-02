import { Component, OnInit,Input } from '@angular/core';
import { Profession } from 'src/app/Data/Profession';
import { SubDomain } from 'src/app/Data/SubDomain';
import {ProfessionService } from '../shared/services/profession.service';
import {UserService } from '../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { TypeProfessions } from '../Data/TypeProfessions';
import { Kupot } from '../Data/Kupot';


@Component({
  selector: 'app-create-profession',
  templateUrl: './create-profession.component.html',
  styleUrls: ['./create-profession.component.scss']
})
export class CreateProfessionComponent implements OnInit {

  @Input() public profession=new Profession();
   public typeprofessions:TypeProfessions[];
   public Kupot11:Kupot[];
   selectedtype:TypeProfessions;

  constructor(public ProfessionService:ProfessionService,public UserService:UserService,private route: ActivatedRoute) { }
  public imagePath;
  imgURL="http://simpleicon.com/wp-content/uploads/account.png";
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = String(reader.result); 
    }
  }
  ngOnInit(): void {
   
    this.getTypeProfList();
    this.getProfKupotList();

  }
  getTypeProfList(){
    
    this.ProfessionService.getTypeProfList().subscribe(res=>{
      localStorage.setItem("typeprofessions",JSON.stringify(res)),
      this.typeprofessions=res,console.log('proffesionstype',this.typeprofessions)
      
    },err=>{
      alert("error")
    })
  }
  getProfKupotList(){
    
    this.ProfessionService.getProfKupotList().subscribe(res=>{
      localStorage.setItem("Kupot",JSON.stringify(res)),
      this.Kupot11=res,console.log('Kupot',this.Kupot11)
      
    },err=>{
      alert("error")
    })
  }
  createnew(){
    this.ProfessionService.createnew(this.profession).subscribe(res=>
     console.log(res)
    ,err=>{
      alert("error")
    })
    
    
  }

}
