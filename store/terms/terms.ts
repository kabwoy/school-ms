import {defineStore} from "pinia";
import {prisma} from "~/server/api/students/db";
import axios from "axios";
export const useTermStore = defineStore("terms",{
    state(){
        return{
            terms:[] as any
        }
    },
    getters:{
        getAllTerms(state){
            return state.terms
        }
    },
    actions:{
        async fetchAllTerms(){
             axios("/api/terms").then((response)=>{
                 this.terms = response.data
             })

        }
    }
})