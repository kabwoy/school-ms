<template>
  <div class="sm:ml-64 ">
    <div class="flex flex-col justify-center items-center  sm:p-4">
      <form @submit.prevent="updateStudent" class="md:w-[50%] sm:w-full  p-6 shadow-xl">
        <h2 class="md:text-4xl flex  align-center font-bold sm:text-4xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          Student update
        </h2>
        <div class="bg-gray-200 px-4 py-3 rounded-xl">
          <div>
            <h1 class="font-bold md:text-lg">Student Details</h1>
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required v-model="sf_name" type="text" placeholder="first name">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required v-model="sl_name" type="text" placeholder="last name">
          </div>
          <div class="mb-4 ">
            <select class="w-full   py-4 rounded" required v-model="sgender" id="">
              <option disabled selected hidden value="">Gender</option>
              <option :value="Gender.MALE">Male</option>
              <option :value="Gender.FEMALE">Female</option>
            </select>
          </div>
          <div class="mb-4 ">
            <select class="w-full   py-4 rounded" required v-model="sparentId" id="">
              <option disabled selected hidden value="">Parent</option>
              <option v-for="parent of parents" :value="parent.id">{{parent.first_name}} || {{parent.last_name}}</option>
            </select>
          </div>
          <div class="mb-4 flex-1">
            <input class="w-full py-4 rounded" required type="date"   v-model="sdob"  placeholder="Date Of Birth">
          </div>
        </div>
        <hr>
        <!--    <div class="bg-gray-300 px-4 py-6 rounded-xl mt-4">-->
        <!--    <div class="">-->
        <!--      <h2 class="font-bold md:text-lg">Parents Details</h2>-->
        <!--      <div class="flex gap-2">-->
        <!--      <div class="mb-4 flex-1">-->
        <!--        <input class="w-full py-4 rounded" type="text" required v-model="pf_name" placeholder="first name">-->
        <!--      </div>-->
        <!--      <div class="mb-4 flex-1">-->
        <!--        <input class="w-full py-4 rounded" required type="text" v-model="pl_name" placeholder="last name">-->
        <!--      </div>-->
        <!--      </div>-->
        <!--      <div class="mb-4">-->
        <!--        <select class="w-full py-4 rounded" required v-model="pgender">-->
        <!--          <option disabled selected hidden value="">Gender</option>-->
        <!--          <option :value="Gender.MALE">Male</option>-->
        <!--          <option :value="Gender.FEMALE">Female</option>-->
        <!--        </select>-->
        <!--      </div>-->
        <!--    </div>-->
        <!--    <div class="mb-4">-->
        <!--      <input class="w-full py-4 rounded" required type="text" v-model="pid_number" placeholder="id number">-->
        <!--    </div>-->
        <!--    <div class="mb-4">-->
        <!--      <input class="w-full py-4 rounded" required type="text" v-model="pcontact" placeholder="Contact">-->
        <!--    </div>-->
        <!--    <div class="mb-4">-->
        <!--      <input class="w-full py-4 rounded" required type="text" v-model="paddress" placeholder="Address">-->
        <!--    </div>-->
        <!--    </div>-->
        <button class="btn btn-success mt-2 flex gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          Update Student
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const parentStore = useParentStore()
definePageMeta({
  layout:"admin"
})
import {useFetch, useRoute} from "#app";
import {Gender} from "~/server/api/students/enums/Gender";
import {useParentStore} from "~/store/parents/parents";
const errorMsg = ref(null)

//students
const sf_name = ref("")
const sl_name = ref("")
const sgender = ref("")
const sdob = ref("")
const sparentId = ref("")
const parents = reactive([])
const route = useRoute()
const router = useRouter()
const id = route.params.id
const {data} = await useFetch(`/api/students/${id}`)
const {first_name , last_name , gender , dob , parentId} = data.value

sf_name.value = first_name
sl_name.value = last_name
sgender.value = gender
sparentId.value = parentId
sdob.value = dob.split("T")[0]
const response = await useFetch(`/api/parents`)

async function updateStudent(){
  if(sf_name.value.trim() === "" || sl_name.value.trim() === "" || sl_name.value.trim() ==="" ){
    return alert("All Fields Are Required")
  }
  const studentBody = {
    first_name:sf_name.value,
    last_name:sl_name.value,
    gender:sgender.value,
    dob:sdob.value,
    parentId:sparentId.value
  }
   axios.patch(`/api/students/${+id}` , studentBody).then((response)=>{
     console.log(response.status)
     // location.("/dashboard/students")
      router.push("/dashboard/students").then(()=>{
        router.go()
      })
   }).catch((err)=>{
     alert(err.message)
   })
}
onMounted(async()=>{
  response.data.value.map((parent)=>{
  parents.push(parent)
})
})
</script>

<style scoped>

</style>