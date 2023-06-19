import {destroy} from "./db/teachers";
export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return destroy(+id)

})