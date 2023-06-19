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
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="parent of parents" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{parent.first_name}}
          </th>
          <td class="px-6 py-4">
            {{parent.last_name}}
          </td>
          <td class="px-6 py-4">
            {{parent.gender}}
          </td>
          <td class="px-6 py-4">
            {{parent.contact}}
          </td>
          <td class="px-6 py-4">
            {{parent.address}}
          </td>
          <td class="px-6 py-4">
            {{parent.id_number}}
          </td>
          <td class="px-6 py-4">
            <router-link :to="'/dashboard/parents/edit/'+ parent.id" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline mr-2">Edit</router-link>
            <button @click="deleteParents(parent.id)" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline">delete</button>
          </td>
        </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import {useParentStore} from "~/store/parents/parents";
import axios from "axios";
definePageMeta({
  layout:"admin"
})
// const parents = reactive([])
const parent = ref({})
const parentStore = useParentStore()
const parents = computed(()=>{
  return parentStore.getAllParents
})
const store = useParentStore()
function deleteParents(id){
  axios.delete(`/api/parents/${id}`).then((response)=>{
    location.reload()
  }).catch((err)=>{
    alert(err.message)
  })
}
onMounted(async()=>{

})
</script>

<style scoped>

</style>