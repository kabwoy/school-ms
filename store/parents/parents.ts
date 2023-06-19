import {defineStore} from "pinia";
import {prisma} from "~/server/api/students/db";
import axios from "axios";
export const useParentStore = defineStore("parents",{
    state(){
        return{
            parents:[] as any
        }
    },
    getters:{
        getAllParents(state){
            return state.parents
        }
    },
    actions:{
        async fetchAlParents(){
           const response = await axios("/api/parents")
            response.data.map((parent:any)=>{
                this.parents.push(parent)
            })
        }
    }
})