import {getAllStudents} from "./db/students";

export default defineEventHandler(async(event)=>{

    return getAllStudents()

})