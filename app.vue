<template>

  <div>
    <NuxtLayout>
      <Navbar/>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
import {initFlowbite} from 'flowbite'
import {useStudentsStore} from "~/store/students";
import {useParentStore} from "~/store/parents/parents";
import {useSubjectStore} from "~/store/subjects/subjects";
import {useTeacherStore} from "~/store/teachers/teachers";
import {useTermStore} from "~/store/terms/terms";
import {useExamStore} from "~/store/exams/exams";
import {useClassRoomStore} from "~/store/classrooms/classrooms";
const studentStore = useStudentsStore()
const parentStore =  useParentStore()
const subjectStore = useSubjectStore()
const teacherStore = useTeacherStore()
const termStore = useTermStore()
const examStore = useExamStore()
const classStore = useClassRoomStore()


onMounted(async()=>{
    await studentStore.fetchStudents();
    await parentStore.fetchAlParents();
    await subjectStore.fetchAllSubjects();
    await teacherStore.fetchAllTeachers();
    await examStore.fetchAllExams();
    await termStore.fetchAllTerms();
    await classStore.fetchAllClassrooms();
    initFlowbite();

})
</script>