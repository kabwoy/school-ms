import {findAll} from "./db/exams";
export default  defineEventHandler(async(event)=>{
    return findAll()
})