 import {TypeProfessions} from 'src/app/Data/TypeProfessions'
 import {Reference} from 'src/app/Data/Reference'
 import {SubDomain} from 'src/app/Data/SubDomain'
 import {Kupot} from 'src/app/Data/Kupot'
 import {opinion} from 'src/app/Data/Opinion'
export class Profession  {
    profId  : number;
    profName:string;
    type : number;
    
    tel:string;
    addTel:string;
    email:string;
    privateAddres:string;
    clinicAddres:string;
    subdomain:number;
    privateOpinion:string;
    IsDeleted:boolean=false;
    typeProfessions:TypeProfessions=new TypeProfessions() ;
     subdomain1:SubDomain=new SubDomain();
     reference :Reference[];
     Kupot11:Kupot[];
     opinions:opinion[];


}
