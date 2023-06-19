import {defineStore} from "pinia";
import axios from "axios";

export const useTeacherStore = defineStore("teachers",{
    state(){
        return{
            teachers:[] as any
        }
    },
    getters:{
        getAllTeacher(state){
            return state.teachers
        }
    },

    actions:{
        async fetchAllTeachers(){
            const teachers = await $fetch("/api/teachers").catch((err)=>alert(err.message))
            this.teachers = teachers
        }
    }

})