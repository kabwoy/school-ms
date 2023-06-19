import {update} from "./db/exams";
// @ts-ignore
import joi from "joi";

export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    const body = await readBody(event)
    const schema = joi.object({
        exam_type:joi.string().optional(),
        termId:joi.number().optional(),
        date:joi.date().optional()
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