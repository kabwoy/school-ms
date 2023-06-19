import {findById} from "./db/subjects";


export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id

    return findById(+id)

})