<template>
  <div>
    <h1><slot></slot></h1>
    <h1><slot name="s1"></slot></h1>    
    <h2><slot name="s2" :gender="gender" :stuName="stuName" :age="age"></slot></h2>    
    
  </div>
</template>

<script setup>

const stuName = "孙悟空"
const age =18
const gender = "男"

</script>

<style>

</style>