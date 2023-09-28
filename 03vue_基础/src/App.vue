<template>
  <div>
    <h1>直接setup</h1>
    <button @click="fn()">count++</button>{{ count }}
  </div>
</template>

<script setup>
//组合式API，已经暴露好了，不用再return了
import { reactive,ref } from 'vue';

/**
 *    reactive()
 *      - 返回一个对象的响应式代理
 *      - 返回的是一个深层响应式对象
 *      - 也可以使用shallowReactive（）创建一个浅层响应式对象
 *      - 缺点：
 *          - 只能返回对象的响应式代理！不能处理原始值
 * 
 * 
 *    ref（）
 *       - 接受一个任意值，并返回它的响应式代理
 */
const stu = reactive({
  name:"孙悟空"
})

//ref在生成响应式代理时，它是将值包装为了一个对象 0 -->  {value:0}
//访问ref对象时，必须通过 对象.value 来访问其中的值
//在template模板中，ref对象会被自动解包
let count = ref(0) //生成一个0的响应式代理

//count = 0 //该变量只会影响到变量自己，在js中，无法实现对一个变量的代理
console.log(count.value)

function fn(){
  count.value++
}

</script>

<style>

</style>