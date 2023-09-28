<template>
  <form @submit.prevent="submitHandler">
    <div>
        姓名 <input type="text" v-model="newStu.name">
    </div>

    <div>
        年龄 <input v-model="newStu.age" type="number" min="1">
    </div>

    <div>
        性别 
        <input v-model="newStu.gender" type="radio" name="gender" value="男">男
        <input v-model="newStu.gender" type="radio" name="gender" value="女">女
    </div>

    <div>
        住址 <input v-model="newStu.address" type="text">
    </div>
    
    <div>
        <button>添加</button>
    </div>

  </form>
</template>

<script setup>
import { ref,inject } from 'vue'
//创建一个ref来存储新的学生信息
const newStu = ref(
  {
    name:"",
    age:1,
    gender:"男",
    address:""
  }
)

const {addNewStudent} =inject("student")

const submitHandler = ()=>{
    // console.log(newSt.value)
    // 调用方法
    addNewStudent({...newStu.value})
    newStu.value.name=""
    newStu.value.age=1
    newStu.value.gender="男"
    newStu.value.address=""
}
</script>

<style>

</style>