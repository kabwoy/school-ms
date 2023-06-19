import {destroy} from "./db/exams";
export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return destroy(+id)

})