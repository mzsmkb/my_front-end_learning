<template v-slot>
  <div class="app">
    <h2>今天天气真不错!!!</h2>
    <button :class="$style.box1">这是app组件里的box1</button>
    <MyBox></MyBox>
  </div>
  
</template>

<script setup>
import MyBox from "./MyBox.vue";
</script>



<!--
  css模块
    - 自动的对模块中的类名进行hash化来确保类名的唯一性
    - 再模板中可以通过  $style.类名 使用
    - 也可以通过module的属性值来指定变量名
-->
<style module>
.box1 {
  background-color: orange;
}
</style>