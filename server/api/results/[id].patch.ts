import {update} from "./db/results";
// @ts-ignore
import joi from "joi";

export default defineEventHandler(async(event)=>{
    const id = event.context.params!.id
    const body = await readBody(event)
    const schema = joi.object({
        subjectId:joi.number().optional(),
        examId:joi.number().optional(),
        studentId:joi.number().optional(),
        marks:joi.number().optional()
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