<template>
  <div class="sm:ml-64 ">
    <div class="flex flex-col justify-center items-center  sm:p-4">
      <form @submit.prevent="handleUpdate" class="md:w-[50%] sm:w-full  p-6 shadow-xl">
        <h2 class="md:text-4xl flex  align-center font-bold sm:text-4xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          Teacher Update
        </h2>
        <div class="bg-gray-200 px-4 py-3 rounded-xl">
          <div>
            <h1 class="font-bold md:text-lg">Teacher Details</h1>
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required type="text" v-model="f_name" placeholder="first name">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="text" v-model="l_name" placeholder="last name">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="text" v-model="contact" placeholder="contact">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="text" v-model="address" placeholder="address">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="email" v-model="email" placeholder="email">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="password" v-model="password" placeholder="password">
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required  type="text" v-model="id_number" placeholder="id number">
          </div>
          <div class="mb-4 ">
            <select class="w-full py-4 rounded" v-model="gender" required  id="">
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
        <button class="btn btn-primary mt-2 flex gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
          </svg>
          Update Teacher
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {Gender} from "~/server/api/students/enums/Gender";
import axios from "axios";
const route = useRoute()
const router = useRouter()
definePageMeta({
  layout:"admin"
})
const id = +route.params.id

const f_name = ref("")
const l_name = ref("")
const gender = ref("")
const id_number = ref("")
const contact = ref("")
const address = ref("")
const email = ref("")
const password = ref("")
const loading = ref(false)

axios(`/api/teachers/${id}`).then((response)=>{

  const {data} = response
  f_name.value = data.first_name
  l_name.value = data.last_name
  gender.value = data.gender
  id_number.value = data.id_number
  contact.value = data.contact
  address.value = data.address
  email.value = data.email
  password.value = data.password

})

function handleUpdate(){
  if(
      f_name.value.trim() === "" || l_name.value.trim() === "" || gender.value.trim === "" ||
      id_number.value.trim() === "" || contact.value.trim() === "" || address.value.trim() === "" ||
      email.value.trim() === "" || password.value.trim() === ""
  ){
    return alert("All fields are required")
  }
  const teacherBody = {
    first_name:f_name.value,
    last_name:l_name.value,
    gender:gender.value,
    id_number:id_number.value,
    contact:contact.value,
    address:address.value,
    email:email.value,
    password:password.value
  }

  axios.patch(`/api/teachers/${id}` ,teacherBody).then((response)=>{
      router.push("/dashboard/teachers").then(()=>{
        router.go()
      })
  })
}
</script>

<style scoped>

</style>