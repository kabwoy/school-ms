import {destroy} from "./db/classrooms";
export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return destroy(+id)

})