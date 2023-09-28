<template>
  <h1>我是App根组件</h1>
  <MyBox :count="count" :obj="obj" :maxLength="嘻嘻"></MyBox>
  <button @click="count++">点我改count(App)</button>

</template>

<script setup>

import MyBox from './components/MyBox.vue';
import { ref } from 'vue';

const count = ref(0)

const obj =ref({
  count:0
})

</script>

<style>

</style>