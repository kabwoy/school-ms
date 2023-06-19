<template>
<div class="sm:ml-72 flex justify-evenly items-center">
  <div class="flex flex-col w-[30%] shadow-xl p-8 rounded-ls">
    <div class="flex flex-col">
      <label class="mr-4" for="">Select Class To Insert Marks</label>
      <select @change="handleChange" v-model="classId">
        <option disabled selected hidden="" value="">classses</option>
        <option v-for="cl of classrooms" :value="cl.id">{{cl.classroom_name}}</option>
      </select>
    </div>
    <div class="flex flex-col" >
      <label class="mr-4" for="">Subject</label>
      <select  v-model="subject">
        <option disabled selected hidden="" value="">Subjects</option>
        <option v-for="subject of subjects" :value="subject.id">{{subject.subject_name}}</option>
      </select>
    </div>
    <div class="flex flex-col " >
      <label class="mr-4" for="">Exam</label>
      <select v-model="exam">
        <option disabled selected hidden="" value="">Exam</option>
        <option v-for="exam of exams" :value="exam.id">{{exam.exam_type}} - {{exam.date.split("T")[0]}}</option>
      </select>
    </div>
    <button class="btn btn-success mt-2 text-white font-bold">Filter</button>
  </div>

  <p v-if="isEmpty">No students in the selected class</p>
  <div class="flex flex-col  items-center">
  <div v-for="stud of students" :data-student = "stud.id" class="mark-section w-full flex items-center ">
    <label for="">{{stud.first_name}} {{stud.last_name}}</label>
    <input type="text" class="input-marks rounded w-full mt-2">
<!--    <input type="checkbox"/>-->
  </div>
    <button @click="handlesubmit" v-if="!isEmpty" class="btn btn-primary mt-4">Add Marks</button>
  </div>

</div>

</template>

<script setup>
import axios from "axios";
import {useSubjectStore} from "~/store/subjects/subjects";
import {useExamStore} from "~/store/exams/exams";
const classrooms = reactive([])
const classId = ref("")
const students = reactive([])
const subject = ref("")
const exam = ref("")

const isEmpty = ref(true)
const subjectStore = useSubjectStore()
const examStore = useExamStore()
definePageMeta({
  layout:"admin"
})

const subjects = computed(()=>subjectStore.getAllSubjects)
const exams = computed(()=>examStore.getAllExams)
const classRm = await $fetch("/api/classrooms").catch((err)=>alert(err.message))

classRm.map((cr)=>{
  classrooms.push(cr);
})

async function handlesubmit(e){
  const arrOfResults = []
  const marksSection = document.querySelectorAll(".mark-section")
  const marks = document.querySelectorAll(".input-marks")
  for(let i = 0; i<marks.length; i++){
    const studentId = marksSection[i].dataset.student
    let newObj = {
      studentId:studentId,
      marks:marks[i].value,
      subjectId:subject.value,
      examId:exam.value
    }
    arrOfResults.push(newObj)
  }
  console.log(arrOfResults)
  const response = await $fetch("/api/results/store" , {method:"POST" , body:arrOfResults , headers:{'Content-Type':'application/json'}})
  // const hell = "".length.valueOf().toExponential()



}
function handleChange(){
    students.splice(0)
     axios(`/api/students/classes/${+classId.value}`).then((response)=>{
    const {data} = response
       if(data.length<=0){
         return isEmpty.value = true
       }
       isEmpty.value = false
    data.map((student)=>{
      students.push(student);
    })
  }).catch((err)=>{
    alert(err.message)
  })
}
</script>

<style scoped>

</style>