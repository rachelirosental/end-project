import {Profession} from 'src/app/Data/Profession'
import {user} from 'src/app/Data/user'
import {TypeReference} from 'src/app/Data/TypeReference'
export class Reference {
    refId : number;
    date:Date;
    description :string;
    bornDate:Date;
    isCare:boolean;
   userName:number;
    attendantId:number;
    profId:number;
    typeRef:number;
    recommendation:string;
    professions:Profession;
    users:user;
   typeReference:TypeReference;
    }
