<template>
  <!--pubilc是静态资源目录，静态资源目录在打包的时候，
  会原封不动的放到dist根目录里，而dist目录就是项目的根目录-->
  
  <!--
    当我们需要为标签动态的设置属性时，需要使用v-bind指令
      可以简写为 :

    当我们为一个布尔值设置为属性时，
      如果值为true，则元素上有该属性（转换为true，也算true)
      如果值为false，则元素没有该属性（转换后为false，也算false）

  -->
  <div>
    <!-- 动态设置title-->
    <img :[atttitle]="attchantitle" :src="imgPath" alt="messi">
    <button @click="changeImg">切换图片</button>


    <div :="obj"></div>
    <input type="text" :disabled="isDisable"/>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
const imgPath = ref("/images/messi.jpg")
const changeImg =()=>{
  imgPath.value = "/images/neymar.jpg"
}
const obj ={
  id:"das",
  class:"hkhkj"
}

const isDisable = ""
const atttitle = "title"
const attchantitle = "这是一个title属性"

</script>

<style>

</style>