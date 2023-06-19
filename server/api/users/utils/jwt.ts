// @ts-ignore
import jwt from "jsonwebtoken"

export function generateAccessToken(user:any){
    const accessToken = jwt.sign({id:user.id , role:user.role} , process.env.JWT_ACCESS_TOKEN_SECRET, {
        expiresIn:"10m"
    })
    return accessToken
}

export function generateRefreshToken(user:any){
    const refreshToken = jwt.sign({id:user.id , role:user.role} , process.env.JWT_REFRESH_TOKEN_SECRET, {
        expiresIn:"4h"
    })
    return refreshToken
}

export function generateTokens(user:any){
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)
    return{
        accessToken:accessToken,
        refreshToken:refreshToken
    }
}