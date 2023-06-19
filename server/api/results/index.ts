import {findAll} from "./db/results";
export default  defineEventHandler(async(event)=>{
    return findAll()
})