import { TypeUser } from './TypeUser';

export interface user extends TypeUser{
        userId:number;
        userFname:string; 
        userLname:string;
        tel:string;
        email:string; 
        password :string;
        typeUser:number;
}
