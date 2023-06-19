import {prisma} from "../../students/db";

export const store = (exam:any)=>{
    return prisma.exams.create({
        data:{
            ...exam,
        }
    })

}
export const findAll = ()=>{
    return prisma.exams.findMany({include:{
        term:true
        }})
}

export function findById(id:number){

    return prisma.exams.findUnique({where:{id:id}})
}
export function destroy(id:number){

    return prisma.exams.delete({where:{id:id}})
}
export function update(id:number , body:any){
    return prisma.exams.update({where:{id:id} , data:body})
}
