// @ts-ignore
import joi from "joi";
import {store} from "./db/exams";
export default defineEventHandler(async(event)=>{
    const body = await readBody(event)
    const schema = joi.object({
        exam_type:joi.string().required(),
        termId:joi.number().required(),
        date:joi.date().required()

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