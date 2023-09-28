<template>
  <h1>hello vue</h1>
  <StudentList></StudentList>
  <hr>
  <StudentForm></StudentForm>

</template>

<script setup>
import { ref,provide } from 'vue'
import StudentList from "./components/StudentList.vue"
import StudentForm from './components/StudentForm.vue';

/* 
  多行快捷键 shift + alt + a
        依赖注入：
            - 通过依赖注入，可以跨域多层组件向其他的组件传递数据
            - 步骤：
              1、设置依赖 （provide） provide（name,value)
              2、注入数据 （inject） const value = inject(name,default)
*/


const STU_ARR = ref([
  {
    id:1,
    name:"孙悟空",
    age:18,
    gender:"男",
    address:"花果山"
  },
  {
    id:2,
    name:"猪八戒",
    age:28,
    gender:"男",
    address:"高老庄"
  },
  {
    id:3,
    name:"沙和尚",
    age:38,
    gender:"男",
    address:"流沙河"
  },
  {
    id:4,
    name:"白骨精",
    age:18,
    gender:"女",
    address:"白骨洞"
  },
])


const delStudentByIndex=(index)=>{
  STU_ARR.value.splice(index,1)
}

const addNewStudent=(student)=>{
  const lastid =  STU_ARR.value.at(-1)?.id  //？作用：1、有id就取，没有的话2、没有就不去也不报错
  const newId = !isNaN(lastid) ? lastid +1 :1 //不是nan就加一

  student.id=newId
  STU_ARR.value.push(student)
}

provide("student",{
  students:STU_ARR,
  delStudentByIndex,
  addNewStudent
})

</script>

<style>

</style>