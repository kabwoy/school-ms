<template>
  <div class="p-4 sm:ml-64 mt-4">
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
            Contact
          </th>
          <th scope="col" class="px-6 py-3">
            Address
          </th>
          <th scope="col" class="px-6 py-3">
            Id Number
          </th>
          <th scope="col" class="px-6 py-3">
            Email
          </th>

          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="teacher of teachers" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{teacher.first_name}}
          </th>
          <td class="px-6 py-4">
            {{teacher.last_name}}
          </td>
          <td class="px-6 py-4">
            {{teacher.gender}}
          </td>
          <td class="px-6 py-4">
            {{teacher.contact}}
          </td>
          <td class="px-6 py-4">
            {{teacher.address}}
          </td>
          <td class="px-6 py-4">
            {{teacher.id_number}}
          </td>
          <td class="px-6 py-4">
            {{teacher.email}}
          </td>
          <td class="px-6 py-4">
            <router-link :to="'/dashboard/teachers/edit/'+teacher.id" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline mr-2">
               Edit </router-link>
            <button @click="deleteTeacher(+teacher.id)" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline">delete</button>
          </td>
        </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import {useTeacherStore} from "~/store/teachers/teachers";
import axios from "axios";

definePageMeta({
  layout:"admin"
})

const teacherStore = useTeacherStore()

const teachers = computed(()=>teacherStore.getAllTeacher)

function deleteTeacher(id){
  axios.delete(`/api/teachers/${id}`).then(()=>{
    location.reload()
  })
}
</script>

<style scoped>

</style>