import {destroy} from "./db/subjects";
export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return destroy(+id)

})