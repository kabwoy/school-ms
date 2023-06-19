// @ts-ignore
import joi from 'joi'
import {createUser, getUserByEmail} from "./db/users";
// @ts-ignore
import bcrypt from 'bcryptjs'
export default defineEventHandler(async (event)=>{
    const body = await readBody(event)

    const schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().required()
    })

    const {error , value} = schema.validate(body)

    if(error){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:error
        }))
    }
    const userEmail = await getUserByEmail(value.email)

    if(userEmail.length > 0){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:"User with this email exists"
        }))
    }
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(value.password , salt)

    const user =  createUser({password:hashPassword , email:value.email})
    return user

})