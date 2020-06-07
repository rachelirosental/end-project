 import {typeProfessions } from 'src/app/Data/typeProfessions';
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


    }
    