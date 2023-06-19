import {findById, getAllStudents} from "./db/students";
import {prisma} from "./db";

export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id

    return findById(+id)

})