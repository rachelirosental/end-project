import {Profession} from 'src/app/Data/Profession'
import {user} from 'src/app/Data/user'
import {TypeReference} from 'src/app/Data/TypeReference'
export class Reference {
    refId : number;
    date:Date=new Date();
    description :string;
    bornDate:Date=new Date();
    isCare:boolean;
   userName:number;
    
    profId:number;
    typeRef:number;
    recommendation:string;
    professions:Profession=new Profession();
    users:user=new user();
   typeReference:TypeReference=new TypeReference();
    }
