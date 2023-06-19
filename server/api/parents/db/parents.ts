import {prisma} from "../../students/db";

function fetchAllParents(){

    return prisma.parents.findMany();
}

function store(body:any){

    return prisma.parents.create({data:body})
}
function findById(id:number){

    return prisma.parents.findUnique({where:{id:id}})
}

function update(id:number , body:any){
    return prisma.parents.update({where:{id:id} , data:body})
}
function destroy(id:number){

    return prisma.parents.delete({where:{id:id}})
}
export{
    fetchAllParents,
    findById,
    update,
    destroy,
    store
}