import {findById} from "./db/parents";


export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id

    return findById(+id)

})