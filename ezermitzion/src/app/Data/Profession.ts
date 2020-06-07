 import {TypeProfessions } from 'src/app/Data/TypeProfessions';
export interface Profession extends TypeProfessions {
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
    typeprofession:TypeProfessions;
    };


