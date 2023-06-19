import {fetchAllParents} from "./db/parents";

export default  defineEventHandler(async(event)=>{
    return fetchAllParents()
})