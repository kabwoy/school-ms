import {prisma} from "../../students/db";

export const store = (term:any)=>{
    return prisma.terms.create({
        data:{
            ...term,
        }
    })

}
export const findAll = ()=>{
    return prisma.terms.findMany()
}

export function findById(id:number){

    return prisma.terms.findUnique({where:{id:id}})
}
export function destroy(id:number){

    return prisma.terms.delete({where:{id:id}})
}
export function update(id:number , body:any){
    return prisma.terms.update({where:{id:id} , data:body})
}
