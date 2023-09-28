<template>
<div class="tab-item">

    <photo :src="item.img" :alt="item.name" :rate="item.rate"></photo>

    <div class="desc">
        <span>{{props.item.name}}</span>
        <HotBar :hot="props.item.hot" :max-hot="props.firstHot"></HotBar>
    </div>

</div>
</template>

<script setup>
import photo from './photo.vue';
import HotBar from './HotBar.vue';
//创建一个响应式对象
/**
        子组件中的数据通常不会在子组件中直接定义，这样会导致数据和视图发生耦合
        子组件中的数据通常会在创建组件实例时确定！
        父组件可以通过 props 来将数据传递给子组件

        使用props
            - 先在子组件中定义props
 */

const props = defineProps(["item",'firstHot'])
const item = props.item

console.log(props.item)

</script>




<style scoped>
.tab-item {
  margin-bottom: 20px;
  display: flex;
}


.desc {
  /* border-style: double; */
  display: flex;
  flex:auto;
  font-size: 22px;
  justify-content: space-evenly;
  flex-flow: column;
  color: aliceblue;
  text-indent: 0.5em;
}


</style>