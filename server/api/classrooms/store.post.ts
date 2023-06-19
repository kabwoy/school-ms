// @ts-ignore
import joi from "joi";
import {store} from "./db/classrooms";
export default defineEventHandler(async(event)=>{
    const body = await readBody(event)
    const schema = joi.object({
        classroom_name:joi.string().required(),
        teacherId:joi.number().required(),

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