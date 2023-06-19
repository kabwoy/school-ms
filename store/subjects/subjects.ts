import {defineStore} from "pinia";
import axios from "axios";

export const useSubjectStore = defineStore("subjects" , {
    state(){
        return{
            subjects:[] as any
        }
    },
    getters:{
        getAllSubjects(state){

            return state.subjects

        }
    },

    actions:{
        fetchAllSubjects(){
            axios("/api/subjects").then(({data})=>{
                data.map((subject:any)=>{
                    this.subjects.push(subject)
                })

            })
        }
    }
})