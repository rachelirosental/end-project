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
<<<<<<< HEAD
    typeprofession:typeProfessions;
=======
    typeprofession:TypeProfessions;
    };
>>>>>>> a21c3b023f96afa8fa62305318896ea990f75cb7


