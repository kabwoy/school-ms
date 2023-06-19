import {prisma} from "../../students/db";
import {IUser} from "../interfaces/User";

export  function getUserByEmail(email:string){
    return prisma.users.findMany({where:{email:email}})
}

export async function createUser(user:IUser){

    return prisma.users.create({data:user})
}
