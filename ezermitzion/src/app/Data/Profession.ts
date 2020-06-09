 import {typeProfessions} from 'src/app/Data/TypeProfessions'
 import {Reference} from 'src/app/Data/Reference'
 import {SubDomain} from 'src/app/Data/SubDomain'
 import {Kupot} from 'src/app/Data/Kupot'
 import {opinion} from 'src/app/Data/Opinion'
export interface Profession extends typeProfessions {
    profId  : number;
    profName:string;
    type : number;
    kupa:number;
    tel:string;
    addTel:string;
    email:string;
    privateAddres:string;
    clinicAddres:string;
    subdomain:number;
    privateOpinion:string;
     typeprofession:typeProfessions;
     Subdomain1:SubDomain;
     Reference :Reference[];
     Kupot:Kupot;
     Opinions:opinion[];


}
