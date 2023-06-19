// @ts-ignore
import joi from "joi";
import {store} from "./db/subjects";
export default defineEventHandler(async(event)=>{
    const body = await readBody(event)
    const schema = joi.object({
        subject_name:joi.string().required(),

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