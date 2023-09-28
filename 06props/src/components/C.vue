<template>

    <!-- <h2> 我是禁止自动透传的</h2> -->


  <h2  class="box3" :class="$attrs.class" style="font-size: 60px;">我是组件C</h2>
    <!-- <h3 :class="$attrs.class" :style="$attrs.style" >我也是组件C</h3> -->
  <h3 :="$attrs">我也是组件C</h3>
  <h3>{{ $attrs }}</h3>
<!-- 
    在模板中，可以通过$attrs来访问透传过来的属性，
        可以手动指定透传过来的属性要添加到哪些元素
 -->
</template>

<script setup>
import { ref } from "vue"
import { useAttrs } from "vue";

// 在script中，可以通过useAttrs（）获取透传过来的属性

const attrs = useAttrs()
console.log(attrs)
</script>


<script>
    // export default{
    //     inheritAttrs : false
    // }
</script>



<style>

</style>