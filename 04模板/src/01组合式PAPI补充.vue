<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ newMsg }}</h1>
    <button @click="changeMsgHandler">改msg</button>
    
    <!--
      ref对象在模板中可以自动解包（要求ref对象必须是顶层对象）
    -->
    <h2>{{ obj.name }}</h2>
    <h2>{{ obj2.name.value }}</h2>
    <!--name不是顶层响应式对象，所以不能自动解包-->
    <hr/>
    <h2>{{ obj.age +1 }}</h2>
    <h2>{{ obj2.age.value + 1 }}</h2>
    <hr>
    <h3>这是用const解包后的:</h3>
    <h3>{{ name }}</h3>
    <h3>{{ age }}</h3>
  </div>
  
</template>

<script setup>
//对象用reactive()，不支持原始值
//原始值msg只能用ref
import { ref,computed } from 'vue';
const msg = ref("Hello Vue")

const changeMsgHandler = () => {
  msg.value = "哈哈"
}


//但是这两obj都是对象，建议直接就用reactive就好了，还省事


//{value:obj}
//obj.value.name
//整个obj及其的name，age都是响应式代理
const obj = ref ({
  name:"孙悟空",
  age:18
})

//obj2.name.value
//只有obj2里的name和age才是响应式代理
const obj2 = {
  name:ref("孙悟空"),//{value:"孙悟空"}
  age:ref(18)//{value:18}
}
//如果想要解包，可以向这样子来解包,
//然后再tempalte模板里就可以直接用了
const {name,age} = obj2


//computed 用来生成计算属性
//这里用的是闭包，作用域，可以直接用箭头函数,不在组件实例里了
const newMsg = computed(()=>{
  return msg.value + "哈哈哈哈哈哈"
})

</script>

<style>

</style>