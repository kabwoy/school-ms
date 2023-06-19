import {getStudentClasses} from "../db/students";

export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return getStudentClasses(+id)

})