import {prisma} from "./index"
export const createStudents = (student:any)=>{
    return prisma.students.create({
        data:{
            ...student,
            // parent:{
            //    create:{
            //        ...parent
            //    }
            // }
        }
    })

}
export const getAllStudents = ()=>{
    return prisma.students.findMany({include:{
        classrooms:true
        }})
}

export function findById(id:number){

    return prisma.students.findUnique({where:{id:id}})
}
export function destroy(id:number){

    return prisma.students.delete({where:{id:id}})
}
export function update(id:number , body:any){
    return prisma.students.update({where:{id:id} , data:body})
}
export function getStudentClasses(id:number){
    return prisma.students.findMany({where:{classId:id}})
}
