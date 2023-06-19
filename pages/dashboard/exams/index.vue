<template>
  <div class="p-4 sm:ml-64 mt-4">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Exam Type
          </th>
          <th scope="col" class="px-6 py-3">
            Term
          </th>
          <th scope="col" class="px-6 py-3">
            Date
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="exam of exams" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{exam.exam_type}}
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{exam.term.term_name}}
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{exam.date.split("T")[0]}}
          </th>
          <td class="px-6 py-4">
            <router-link :to="'/dashboard/exams/edit/'+exam.id" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline mr-2">Edit</router-link>
            <button @click="deleteExam(+exam.id)" class="font-medium btn btn-danger btn-sm">delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import {useTermStore} from "~/store/terms/terms";
import axios from "axios";
import {useExamStore} from "~/store/exams/exams";
const termStore = useTermStore()
definePageMeta({
  layout:"admin"
})
const examStore = useExamStore()
const examlist =reactive([])
const exams = computed(()=>{
  return examlist
})

function deleteExam(id){
  axios.delete(`/api/exams/${id}`).then(()=>{
    location.reload()

  }).catch((err)=>{

    alert(err.message)

  })
}
onMounted(async ()=>{
  const response = await axios("/api/exams")

  response.data.map((exam)=>{
      examlist.push(exam)
  })
})
</script>

<style scoped>

</style>