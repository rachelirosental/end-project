import { TypeUser } from 'src/app/Data/TypeUser';
import {dairy} from 'src/app/Data/dairy'
import {Reference} from 'src/app/Data/Reference'

export class user extends TypeUser{
        userId:number;
        userName:string; 
        tel:string;
        email:string; 
        password :string;
        typeUser:number;
        isDeleted:boolean;
        typeUser1:TypeUser;
       dairy:dairy[];
      Reference:Reference[];
       
}
