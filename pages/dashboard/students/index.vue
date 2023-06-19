<template>
  <div class="p-4 sm:ml-64 mt-4">
    <h1>Hello Students</h1>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
           First Name
          </th>
          <th scope="col" class="px-6 py-3">
            Last Name
          </th>
          <th scope="col" class="px-6 py-3">
            Gender
          </th>
          <th scope="col" class="px-6 py-3">
            DOB
          </th>
          <th scope="col" class="px-6 py-3">
           \ Class
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="student of students" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{student.first_name}}
          </th>
          <td class="px-6 py-4">
            {{student.last_name}}
          </td>
          <td class="px-6 py-4">
            {{student.gender}}
          </td>
          <td class="px-6 py-4">
            {{student.dob.split("T")[0]}}
          </td>
          <td class="px-6 py-4">
            {{student.classrooms.classroom_name}}
          </td>
          <td class="px-6 py-4">
            <router-link :to="'/dashboard/students/edit/'+student.id" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline mr-2">Edit</router-link>
            <button @click="deleteStudent(+student.id)" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline">delete</button>
          </td>
        </tr>

        </tbody>
      </table>
    </div>

  </div>


</template>

<script setup>
import {useStudentsStore} from "~/store/students";
import axios from "axios";
const store = useStudentsStore()
const students = computed(()=>{
  return store.getAllStudent
})
definePageMeta({
  layout:"admin"
})
async function deleteStudent(id){
  axios.delete(`/api/students/${id}`).then((response)=>{
    console.log(response.status)
    location.reload()
  }).catch((err)=>{
    alert(err.message)
  })
}

</script>