// @ts-ignore
import joi from "joi";
import {store} from "./db/teachers";
export default defineEventHandler(async(event)=>{
    const body = await readBody(event)
    const schema = joi.object({
        first_name:joi.string().required(),
        last_name:joi.string().required(),
        gender:joi.string().required(),
        contact:joi.string().required(),
        address:joi.string().required(),
        id_number:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().required(),
    })
    const {error , value} = schema.validate(body)
    if(error){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:error.message
        }))
    }
    return store(value)
})