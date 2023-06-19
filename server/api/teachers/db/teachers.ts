import {prisma} from "../../students/db";
// @ts-ignore
import _ from 'lodash';

async function fetchAllTeachers(){
    const teachers = await  prisma.teachers.findMany();
    return teachers.map((teacher)=>{
        return _.pick(teacher, ['id','first_name' , 'last_name' , 'contact' , 'address' , 'gender' , 'email' , 'id_number'])
    })
}

function store(body:any){

    return prisma.teachers.create({data:body})
}
function findById(id:number){

    return prisma.teachers.findUnique({where:{id:id}})
}

function update(id:number , body:any){
    return prisma.teachers.update({where:{id:+id} , data:body})
}
function destroy(id:number){

    return prisma.teachers.delete({where:{id:id}})
}
export{
    fetchAllTeachers,
    findById,
    update,
    destroy,
    store
}