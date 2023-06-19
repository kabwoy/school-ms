<template>
  <div class="p-4 sm:ml-64 mt-4">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Subject Name
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="subject of subjects" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{subject.subject_name}}
          </th>
          <td class="px-6 py-4">
            <router-link :to="'/dashboard/subjects/edit/'+subject.id" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline mr-2">Edit</router-link>
            <button @click="deleteSubject(+subject.id)" class="font-medium btn btn-danger btn-sm">delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {useSubjectStore} from "~/store/subjects/subjects";
import axios from "axios";

definePageMeta({
  layout:"admin"
})
const store = useSubjectStore()
function deleteSubject(id:number){

  axios.delete(`/api/subjects/${id}`).then(()=>{
    location.reload()
  }).catch((err)=>{
    alert(err.message)
  })
}
const subjects = computed(()=>{
  return store.getAllSubjects
})


</script>

<style scoped>

</style>