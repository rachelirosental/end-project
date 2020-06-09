import {Profession} from 'src/app/Data/Profession'
export interface opinion {
    opinionId  : number;
    profPersonid : number;
    description:string;
    date:Date;
    mark:number;
    profession:Profession
    }
