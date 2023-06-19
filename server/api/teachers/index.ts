import {fetchAllTeachers} from "./db/teachers";

export default  defineEventHandler(async(event)=>{
    return fetchAllTeachers()
})