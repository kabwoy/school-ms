// @ts-ignore
import joi from 'joi'
import {getUserByEmail} from "./db/users";
// @ts-ignore
import bcrypt from 'bcryptjs'
import {generateTokens} from "./utils/jwt";
import {useUserTransformer} from "./transformers/user";
export default defineEventHandler(async(event)=>{
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
    if(userEmail.length<=0){
        return sendError(event , createError({
            statusCode:404,
            statusMessage:"No user with specified email, please check your email again!!🤔"
        }))
    }
    const doesPasswordMatch = await bcrypt.compare(value.password , userEmail[0].password)

    if(!doesPasswordMatch){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:"Wrong password check again"
        }))
    }
    const {accessToken , refreshToken} = generateTokens(userEmail[0])
    setCookie(event ,"refreshToken", refreshToken , {httpOnly:true , sameSite:true})
    return {
        accessToken:accessToken,
        userId:useUserTransformer(userEmail[0]).id,
        role:useUserTransformer(userEmail[0]).role
    }
})