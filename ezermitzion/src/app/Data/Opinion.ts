import {Profession} from 'src/app/Data/Profession'
export class opinion {
    opinionId  : number;
    profPersonid : number;
    description:string;
    date:Date;
    mark:number;
    profession:Profession=new Profession();
    }
