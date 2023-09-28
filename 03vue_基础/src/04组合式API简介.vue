<template>
  <div>
    <h1>来一波组合式API</h1>
    <h2>{{ msg }}</h2>
    <button @click="count++">点我修改count</button>{{ count }}
    <h2>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h2>
    <button @click="changeage">点我修改年龄</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
//export default本身是一个js对象，对象里不能声明变量，得按对象的规范来编写
//对象本身没有作用域,对象里有属性、方法 
export default {
  
  setup(){
    //定义变量
    //组合式api中，直接声明的变量，就是一个普通的变量，不是响应式属性
    //    修改这些属性时，不会再视图中产生效果
    let msg = "今天天气真不错！！"
    let count = 0

    //可以通过reactive（）来创建一个响应式对象
    const stu = reactive({
      name:"孙悟空",
      age:18,
      gender:"男"
    })

    //不用methods了，不用this了
    function changeage(){
      stu.age=66
    }


    //在setup（）中可以通过返回值来指定哪些内容需要暴露给外部
    // 暴露后的内容，可以在模板中直接使用
    return {
      msg,
      count,
      stu,
      changeage
    }
  }
  

}
</script>

<style>

</style>