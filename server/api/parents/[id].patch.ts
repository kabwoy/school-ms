import {update} from "./db/parents";
// @ts-ignore
import joi from "joi";

export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    const body = await readBody(event)
    const schema = joi.object({
        first_name:joi.string().optional(),
        last_name:joi.string().optional(),
        gender:joi.string().optional(),
        contact:joi.string().optional(),
        address:joi.string().optional(),
        id_number:joi.string().optional(),
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