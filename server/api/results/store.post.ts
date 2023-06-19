// @ts-ignore
import joi from "joi";
import {store} from "./db/results";
export default defineEventHandler(async(event)=>{
    const body = await readBody(event)
    const finalArr:any = []
    const schema = joi.object({
        subjectId:joi.number().required(),
        examId:joi.number().required(),
        studentId:joi.number().required(),
        marks:joi.number().required()
    })
        body.map((m:any)=>{
        const {error , value} = schema.validate(m)
        if(error){
            return sendError(event , createError({
                statusCode:400,
                statusMessage:error.message
            }))
        }
        finalArr.push(value)
    })


    return store(finalArr)
})