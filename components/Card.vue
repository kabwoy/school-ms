<template>
  <div class="card cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110 w-96 bg-base-100 py-10 shadow-xl">
    <div class="card-body flex flex-row justify-between items-center">
      <h2 class="card-title">{{cardTitle}}</h2>
      <span class="bg-red-100 text-red-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{{total}}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cardTitle:{
    type:String,
    required:true
  },
  total:{
    type:Number,
    default:0
  }
})
</script>

<style scoped>

</style>