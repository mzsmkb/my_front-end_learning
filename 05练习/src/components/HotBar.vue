<template>
  <div class="hot-bar">
    <div class="inner">{{props.hot}}热度</div>
  </div>
</template>

<script setup>
import {computed} from "vue"
const props = defineProps(['hot','maxHot'])


const width = computed(()=>{
    return props.hot / props.maxHot * 100+"%"
})


</script>

<style>
.hot-bar {
  background-color: rgb(16, 19, 19);
  border-radius: 17px;
}

.inner {
  width:v-bind(width);
  border-radius: 17px;
  background-image: linear-gradient(
    90deg,
    rgb(187,3,52) 50%,
    rgb(66,2,12)
  );
  /* width: 100%; */

  /* 这可以使得当width小的适合里边的desc不会换行 */
  white-space: nowrap;
}
</style>