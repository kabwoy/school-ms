import {prisma} from "../../students/db";

export const store = (classroom:any)=>{
    return prisma.classrooms.create({
        data:{
            ...classroom,
        }
    })

}
export const findAll = ()=>{
    return prisma.classrooms.findMany()
}

export function findById(id:number){

    return prisma.classrooms.findUnique({where:{id:id}})
}
export function destroy(id:number){

    return prisma.classrooms.delete({where:{id:id}})
}
export function update(id:number , body:any){
    return prisma.classrooms.update({where:{id:id} , data:body})
}
