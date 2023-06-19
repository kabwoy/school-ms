// @ts-ignore
import _ from "lodash"
export function useUserTransformer(user:any){

    return _.pick(user , ['id' , 'email' , 'role'])

}