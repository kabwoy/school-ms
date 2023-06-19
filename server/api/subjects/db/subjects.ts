import {prisma} from "../../students/db";

export const store = (subject:any)=>{
    return prisma.subjects.create({
        data:{
            ...subject,
        }
    })

}
export const findAll = ()=>{
    return prisma.subjects.findMany()
}

export function findById(id:number){

    return prisma.subjects.findUnique({where:{id:id}})
}
export function destroy(id:number){

    return prisma.subjects.delete({where:{id:id}})
}
export function update(id:number , body:any){
    return prisma.subjects.update({where:{id:id} , data:body})
}
