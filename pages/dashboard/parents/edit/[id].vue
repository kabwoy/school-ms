<template>
   <div class="sm:ml-64 ">
    <div class="flex flex-col justify-center items-center  sm:p-4">
      <form @submit.prevent="updateParent" class="md:w-[50%] sm:w-full  p-6 shadow-xl">
        <h2 class="md:text-4xl flex  align-center font-bold sm:text-4xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          Update Parent
        </h2>
        <div class="bg-gray-200 px-4 py-3 rounded-xl">
          <div>
            <h1 class="font-bold md:text-lg">Parent Details</h1>
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required type="text" v-model="pf_name" placeholder="first name">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="text" v-model="pl_name" placeholder="last name">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="text" v-model="pcontact" placeholder="contact">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="text" v-model="paddress" placeholder="address">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="text" v-model="pid_number" placeholder="id number">
          </div>
          <div class="mb-4 ">
            <select class="w-full py-4 rounded" v-model="pgender" required  id="">
              <option disabled selected hidden value="">Gender</option>
              <option :value="Gender.MALE">Male</option>
              <option :value="Gender.FEMALE">Female</option>
            </select>
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
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
          </svg>
          Update parent
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {Gender} from "~/server/api/students/enums/Gender";
import axios from "axios";
definePageMeta({
  layout:"admin"
})
const pf_name = ref("")
const pl_name = ref("")
const pgender = ref("")
const pid_number = ref("")
const pcontact = ref("")
const paddress = ref("")
const parent = reactive({})

const route = useRoute()
const router = useRouter()
const id = route.params.id
const {data} = await useFetch(`/api/parents/${id}`)
parent.value = data.value

pf_name.value = parent.value.first_name
pl_name.value = parent.value.last_name
pgender.value = parent.value.gender
pcontact.value = parent.value.contact
paddress.value = parent.value.address
pid_number.value = parent.value.id_number
pgender.value = parent.value.gender

function updateParent(){
  if(
      pf_name.value.trim() === "" || pl_name.value.trim() === "" || pgender.value.trim === "" ||
      pid_number.value.trim() === "" || pcontact.value.trim() === "" || paddress.value.trim() === ""
  ){
    return alert("All fields are required")
  }
  const parentBody = {
    first_name:pf_name.value,
    last_name:pl_name.value,
    gender:pgender.value,
    id_number:pid_number.value,
    contact:pcontact.value,
    address:paddress.value
  }
  axios.patch(`/api/parents/${+id}` , parentBody).then((response)=>{
      console.log(response.status)
    router.push("/dashboard/parents").then(()=>{
      router.go()
    })
  }).catch((err)=>{
    alert(err.message)
  })
}
</script>

<style scoped>

</style>