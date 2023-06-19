import {findAll} from "./db/classrooms";

export default  defineEventHandler(async(event)=>{
    return findAll()
})