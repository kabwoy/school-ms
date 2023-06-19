import {createStudents} from "./db/students";
// @ts-ignore
import joi from 'joi'
export default defineEventHandler(async(event)=>{
    const body = await readBody(event)

    const schema =
        joi.object({
            first_name:joi.string().required(),
            last_name:joi.string().required(),
            gender:joi.string().required(),
            dob:joi.date().required(),
            parentId:joi.number().required(),
            classId:joi.number().required()

    })
    //

    const {error , value} = schema.validate(body)
    // console.log(value)
    if(error){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:error.message
        }))
    }
    const student = createStudents(value)

    return student






})