import {findById} from "./db/teachers";


export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id

    return findById(+id)

})