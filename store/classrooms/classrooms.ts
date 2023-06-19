import {defineStore} from "pinia";
import axios from "axios";
import {IClassRoom} from "~/store/classrooms/interfaces/classsroom";

export const useClassRoomStore = defineStore("classrooms", {
    state(){
        return{
            classrooms:[] as IClassRoom[]
        }
    },
    getters:{
        getAllClassRooms(state){

            return state.classrooms

        }
    },
    actions:{
        async fetchAllClassrooms(){
            const classRooms:any = await $fetch("/api/classrooms").catch((err)=>{
                alert(err.message)
            })
            // console.log(classRooms)
            classRooms.map((c:IClassRoom)=>{
                this.classrooms.push(c)
            })
        }
    },
})