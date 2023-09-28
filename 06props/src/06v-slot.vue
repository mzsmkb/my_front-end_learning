<template>
  <h1>App组件</h1>
  <!-- <MyButton>
    <A></A>
  </MyButton> -->
  <MyWrapper>
    gadfas
    <template v-slot:aa>一级标题</template>
    <template #bb>二级标题</template>
  </MyWrapper>
  <!--
    希望在父组件中指定子组件中的内容
          - 我们可以通过插槽（slot）来实现该需求

        <MyButton> 插槽的入口</MyButton>

      <button>
        <slot></slot> 插槽的出口
      </button>

      通过插槽引入组件，位于父组件的作用域中
  -->
      
    <!--
      <MyButton>
        <A :name='name'></A>
      </MyButton>
    -->
</template>

<script setup>
import MyButton from './components/MyButton.vue';
import A from './components/A.vue';
import MyWrapper from "./components/MyWrapper.vue"



</script>

<style>

</style>