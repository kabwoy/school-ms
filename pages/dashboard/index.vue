<template>
  <div class="p-4 sm:ml-64 grid grid-cols-3  gap-4">
    <Card card-title="Students" :total="total" />
    <Card card-title="Parents" :total="totalParents"/>
    <Card card-title="Teachers" :total="totalTeachers"/>
    <Card card-title="Exams"/>
    <Card card-title="Users"/>
  </div>
</template>

<script setup>
import {useStudentsStore} from "~/store/students";
import {useParentStore} from "~/store/parents/parents";
import {useTeacherStore} from "~/store/teachers/teachers";

definePageMeta({
  layout:"admin"
})
const store = useStudentsStore()
const parentStore = useParentStore()
const teacherStore = useTeacherStore()
const total = computed(()=>{
  return store.students.length
})
const totalParents = computed(()=>{
  return parentStore.parents.length
})
const totalTeachers = computed(()=>{
  return teacherStore.teachers.length
})
onMounted(async()=>{
  // await parentStore.fetchAlParents()
})
</script>

<style scoped>

</style>