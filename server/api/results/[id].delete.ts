import {destroy} from "./db/results";
export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    return destroy(+id)

})