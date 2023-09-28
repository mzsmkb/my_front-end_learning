<template>
  <!-- 外部容器 -->
  <div class="container">  
    <!-- 头组件 -->
    <header class="header">
      <!-- 头组件里的两个按钮 -->
      <div @click="myactive=0"  class="top-button" :class="{active:myactive===0}">热门球员</div>
      <div @click="myactive=1"  class="top-button" :class="{active:myactive===1}">热门球队</div>
    </header>
    
    <!-- 球员 -->
    <body v-show="myactive===0">
        <slot name="0"></slot>
    </body>

      <!-- 球队 -->
    <body v-show="myactive===1">
      <slot name="1"></slot>
    </body>

  </div>
</template>

<script setup>
import {ref} from "vue"
const myactive=ref(0)

</script>


<style>
.container {
  box-sizing: border-box;
  background-color: rgb(45, 83, 211);
  padding: 20px;
  width: 800px;
  margin-top: 20px;
}

.header {
  /* 让那两个按钮横排一列 */
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}

.top-button {
  background-color: white;
  font-size: 30px;
  /* 让两个按钮撑满整个header */
  flex: auto;
  text-align: center;
  /* 鼠标移动到该按钮上会变成手势 */
  cursor: pointer;
  transition: 0.5s;
}

.top-button:not(.active):hover {
  color: red;
}

.active {
  background-color: red;
  color: aliceblue;
}




</style>