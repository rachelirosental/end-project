import { TypeUser } from 'src/app/Data/TypeUser';
import {dairy} from 'src/app/Data/dairy'
import {Reference} from 'src/app/Data/Reference'

export class user {
        userId:number;
        userName:string; 
        tel:string;
        email:string; 
        password :string;
        typeUser:number;
        isDeleted:boolean;
        typeUser1:TypeUser=new TypeUser();
       dairy:dairy[];
      reference:Reference[];
       
}
