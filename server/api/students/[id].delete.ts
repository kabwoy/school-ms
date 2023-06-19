import {destroy} from "./db/students";
export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return destroy(+id)

})