import {defineStore} from "pinia";
import axios from "axios";
export const useExamStore = defineStore("exams",{
    state(){
        return{
            exams:[] as any
        }
    },
    getters:{
        getAllExams(state){
            return state.exams
        }
    },
    actions:{
        async fetchAllExams(){
            const exams = await $fetch("/api/exams")
            this.exams = exams
            // response.data.map((exam:any)=>{
            //     this.exams.push(exam)
            // })
        }
    }
})