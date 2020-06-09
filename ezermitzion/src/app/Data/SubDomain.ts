import {Profession} from 'src/app/Data/Profession'
export interface SubDomain{
    subdomainid :number;
    subdomainName:string; 
    professions:Profession[];
}
