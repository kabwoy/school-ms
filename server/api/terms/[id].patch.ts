import {update} from "./db/terms";
// @ts-ignore
import joi from "joi";

export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    const body = await readBody(event)
    const schema = joi.object({
        term_name:joi.string().optional()
    })
    const {error , value} = schema.validate(body)
    if(error){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:error.message
        }))
    }
    return update(+id , value)

})