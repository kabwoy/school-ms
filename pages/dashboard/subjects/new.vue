<template>
  <div class="sm:ml-64 ">
    <div class="flex flex-col justify-center items-center  sm:p-4">
      <form @submit.prevent="addSubject" class="md:w-[50%] sm:w-full  p-6 shadow-xl">
        <h2 class="md:text-4xl flex  align-center font-bold sm:text-4xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          Subject Registration
        </h2>
        <div class="bg-gray-200 px-4 py-3 rounded-xl">
          <div>
            <h1 class="font-bold md:text-lg">Subject Details</h1>
          </div>
          <div class="mb-4">
            <input class="w-full py-4 rounded" required v-model="subject_name" type="text" placeholder="Subject name">
          </div>
        </div>
        <hr>
        <button class="btn btn-secondary mt-2 flex gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
          </svg>
          Add Subject
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout:"admin"
})
const subject_name = ref("")
function addSubject(){
  if(subject_name.value.trim() === ""){
    return alert("Subject Name Is Required")
  }
  const subjectBody = {
    subject_name:subject_name.value
  }

  useFetch("/api/subjects/store" , {method:"POST" , body:subjectBody}).then((response)=>{
    subject_name.value = ""
    location.reload()
  }).catch((err)=>{
    alert(err.message())
  })

}
</script>

<style scoped>

</style>