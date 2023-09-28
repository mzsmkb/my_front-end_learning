<template>

<!--
  就是子组件SlotDemo把数据传给父组件App，然后父组件App接收之后，在把数据传给子组件A，因为A和Slot之间不能直接通讯，
  通过App转了一下，这个例子其实不太好，大概就是这么个意思
-->

  <h1>App组件</h1>
  <SlotDemo>
    <template #default>哈哈哈哈哈</template>
    <template #s1>这是s1</template>
    <template #s2="slotProps"> <!--也可以解构出来-->
      <A :name="slotProps.stuName"></A>
    </template>
  </SlotDemo>
</template>

<script setup>
import SlotDemo from './components/SlotDemo.vue';
import A from './components/A.vue';

</script>

<style>

</style>