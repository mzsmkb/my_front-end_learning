<template>
  <button @click="arr.push('白骨精')">点我一下</button>
  <button @click="arr2.unshift({id:4,name:'白骨精',age:18})">加入arr2</button>
  <ul>
    <li v-for="name of arr">{{ name }}</li>
  </ul>

  <ul>
    <li v-for="(name,index) in arr">{{ index }}-{{ name }}</li>
  </ul>

  <ul>
    <li v-for="obj in arr2">{{ obj.name }}--{{ obj.age }}</li>
  </ul>

  <!-- <template v-for="obj in arr2">{{ obj.name }}--{{ obj.age }}</template> -->

  
     <!--
        我们在使用v-for遍历时，旧的结构和新的结构是按照顺序进行对比的
            diff算法
     -->   
  

  <ul>
    <li v-for="({id,name,age},index) in arr2" :key="id">
    {{ name }}--{{ age }}
    <input type="text">
    </li>
  </ul>


</template>

<script setup>

import { ref } from 'vue';
const arr = ref(['孙悟空','猪八戒','沙和尚','唐僧'])
const arr2 = ref([
    {
        id:1,
        name:"孙悟空",
        age:18,
    },
    {
        id:2,
        name:"猪八戒",
        age:28,
    },
    {
        id:3,
        name:"沙和尚",
        age:38,
    },
])


</script>

<style>

</style> 