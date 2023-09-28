<template>
  <div>
    <h2>这是MyBox组件里的h2</h2>
    <button :class="mybox.box1">这是MyBox组件里的box1</button>
  </div>
</template>

<script setup>

</script>

<style module="mybox">
  .box1 {
    background-color: peru;
  }
</style>