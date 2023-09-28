<template>
  <div>
    <h1>直接setup</h1>
    <h2>{{ msg }}</h2>
    <h3>{{ stu.name }}</h3>
  </div>
</template>

<script setup>
//组合式API，已经暴露好了，不用再return了
import { reactive } from 'vue';

const msg="setup全局"
const count=0
const stu = reactive({
  name:"孙悟空"
})
function fn(){
  alert("哈哈哈哈哈哈哈哈哈哈！！！！")
}
</script>

<style>

</style>