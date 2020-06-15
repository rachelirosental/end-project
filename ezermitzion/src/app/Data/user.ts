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
<<<<<<< HEAD
        typeUser:number;
=======
        typeuser:TypeUser;
     
>>>>>>> f19d4ca23c282d70c7cb1d1455cec64885ae8d6b
        // dairy:dairy[];
        // Reference:Reference[];
       
}
