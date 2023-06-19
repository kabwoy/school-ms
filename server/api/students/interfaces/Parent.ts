import {Gender} from "../enums/Gender";

export interface Parent{
    first_name:string,
    last_name:string,
    id_number: string,
    gender: Gender,
    contact:string,
    address:string

}