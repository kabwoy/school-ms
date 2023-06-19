import {defineStore} from "pinia";
import axios from "axios";

export const useStudentsStore = defineStore('students' , {
    state(){

        return{
            students:[] as any
        }
    },

    getters:{
        getAllStudent(state){
            return state.students
        }
    },

    actions:{
        async fetchStudents(){
            const data = await $fetch("/api/students")
            data.map((student:any)=>{
               this.students.push(student)
            })
            // data.value!.map((student)=>{
            //     console.log(student)
            //     this.students.push(student)
            // })
        }
    }
})