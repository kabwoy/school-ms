import {prisma} from "../../students/db";

export const store = (exam:any)=>{
    return prisma.results.createMany({
        data:[...exam]
    })

}
export const findAll = ()=>{
    return prisma.results.findMany({include:{
        subject:true,
            exam:true,
            student:true

        }})
}

export function findById(id:number){

    return prisma.results.findUnique({where:{id:id}})
}
export function destroy(id:number){

    return prisma.results.delete({where:{id:id}})
}
export function update(id:number , body:any){
    return prisma.results.update({where:{id:id} , data:body})
}
