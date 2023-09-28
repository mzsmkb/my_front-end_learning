<template>
  <div>
    <h1 :class="arr">这是arr</h1>
    <h2 :class="arr2">这是arr2</h2>
    <div :style="style">hhhhhhh</div>
  </div>
</template>

<script setup>
  const arr = ['box1','box2','box3']
  const arr2 = [{box1:true},{box2:true},{box3:false}]
  const style = {
    color:"red",
    backgroundColor:"#bfa"
  }
</script>

<style>

</style>