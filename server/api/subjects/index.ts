import {findAll} from "./db/subjects";

export default  defineEventHandler(async(event)=>{
    return findAll()
})