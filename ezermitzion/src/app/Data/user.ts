import { TypeUser } from 'src/app/Data/TypeUser';
import {dairy} from 'src/app/Data/dairy'
import {Reference} from 'src/app/Data/Reference'

export interface user extends TypeUser{
        userId:number;
        userFname:string; 
        userLname:string;
        tel:string;
        email:string; 
        password :string;
        typeUser:TypeUser;
        dairy:dairy[];
        Reference:Reference[];
       
}
