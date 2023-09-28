<template v-slot>
  <div class="app">
    <h2>今天天气真不错!!!</h2>
    <button class="box1">这是app组件里的box1</button>
    <MyBox></MyBox>
  </div>
  
</template>

<script setup>
import MyBox from "./MyBox.vue";
</script>
<!--
  scoped
    局部样式，不会对其他的vue组件生效 

  - 如何实现的呢？原理,属性选择器
    - 当使用scoped时，vue会自动为该组件中的所有元素生成一个随机的属性
      形如 data-v-7a7a37b1
      生成后，所有的选择器都会在最后添加一个[data-v-7a7a37b1]
        h1 -> h1[data-v-7a7a37b1]
        .box1 -> .bov[data-v-7a7a37b1]

    - 注意：
      - 随机生成的属性，除了会添加到当前组件内的所有元素上，
        也会添加到当前组件引入的其他组件的根组件元素上（仅限与单根元素）,
        这样设计是为了，可以通过父组件来为子组件设置一些样式
-->


<style scoped>
  h1 {
    background-color: #bfa; 
  }

  .box1 {
    width: 100px;
    height: 120px;
    background-color: aquamarine;
  }

/**
  将组件中所有的h2样式的字体颜色设置为黄色
*/

/**
.app h2[data-v-7a7a37b1]
*/
.app h2 {
  color:red
}


/**
  .app[data-v-7a7a37b1] h2
*/
/* .app :deep(h2) {
  color:yellow
} */

/**
  这是全局选择器
*/
    :global(div){
      border: 1px red solid;
    }

</style>
