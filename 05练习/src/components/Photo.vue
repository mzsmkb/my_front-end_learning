<template>
  <div class="photo"> 
      <img :src="props.src " alt="props.name">
      <span>{{ props.rate }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['src','alt','rate'])

const color =computed(()=>{
    //编写判断颜色的代码
    if(props.rate===1){
        return "rgb(254,45,70)"
    }else if (props.rate===2){
        return "rgb(254,88,12)"
    }else{
        return "rgb(254,150,56)"
    }
})

</script>



<style>

/* 容器 */
.photo {
  width: 35%;
  position: relative;
  /* border-style: dashed; */
}
/* 图片 */
.photo img {
  width: 95%;
  margin: 6px;
  border-radius: 10px;
  overflow: hidden;
  /* border-style: dotted; */
  /* position: relative; */
  
}
/* 排名 */
.photo span {
  position:absolute;
  top: 0;
  left: 0;
  background-color: v-bind(color);
  width: 30px;
  height: 28px;
  border-radius: 4px;
  /* border-style: dotted; */
  display: flex;
  color: #e2e212;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 14px;
}
</style>