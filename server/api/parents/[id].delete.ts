import {destroy} from "./db/parents";
export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return destroy(+id)

})