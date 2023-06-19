import {destroy} from "./db/terms";
export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return destroy(+id)

})