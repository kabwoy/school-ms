import {findAll} from "./db/terms";

export default  defineEventHandler(async(event)=>{
    return findAll()
})