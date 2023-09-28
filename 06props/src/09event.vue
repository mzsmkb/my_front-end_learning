<template>
  <h1>hello</h1>
  <div @click.self="clickHandler('box1')" class="box1">
    <div @click="clickHandler('box2')" class="box2">
      <div @click="clickHandler('box3')" class="box3"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/**
 *    事件修饰符：
 *        .stop 停止事件的传播？似乎stop只能停止冒泡
 *        .capture 在捕获阶段触发事件
          .prevent 取消默认行为
          .self 只有事件由自身触发时才会有效
          .once 绑定一个一次性的事件
          .passive 主要用于提示滚动事件的性能  （滚动条）
 */

function clickHandler(text){
  alert(text)
}

</script>

<style>
.box1 {
  background-color: aquamarine;
  width: 800px;
  height: 400px;
}

.box2 {
  background-color:blue;
  width: 400px;
  height: 200px;
}

.box3 {
  background-color:red;
  width: 200px;
  height: 100px;
}
</style>