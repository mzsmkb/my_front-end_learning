<template>
  <h1>属性的透传</h1>
  <h2 class="box1">我是h2</h2>

  <!-- 继承到c组件的根组件 -->
  <C class="box2" style="color: red;" @click="showMsg"></C>
</template>

<script setup>
import { ref } from 'vue'
import C from './components/C.vue';

/**
 *     透传属性
 *        - 在组件上设置属性，会自动传递给组件的根元素
 *        - 这样一来可以使得我们在父组件中为子组件来设置属性
 *        - 透传会发生在没有被声明为props和emit的属性上
 * 
 */

function showMsg(){
  alert("hello")
}




</script>

<style scoped></style>
