<template>
  <h1>hello vue</h1>
  <form @submit.prevent=submitHandler>
<!--
  这里我们将表单项的value属性和变量text做了绑定，
    当value发生变化时，text变量会随之变化（单向绑定）

    当value或text任意一个发生变化，另一个也会随之变化（双向绑定）
-->

  <!--
      v-model的修饰符
        .lazy 使用change来处理数据 懒加载
        .trim 去除前后的空格
        .number 将数据转换为数值 
  -->


    <div>
      信息：<input type="text" v-model="text">
    </div>
    <div>
      是否：<input type="checkbox" 
      v-model="bool"
      true-value="是"
      false-value="否">
    </div>

    <div>
      爱好：
      <input 
      type="checkbox"
      v-model="hobbies"
      name="hobby"
      value="乒乓球">乒乓球
      <input 
      type="checkbox"
      v-model="hobbies"
      name="hobby"
      value="羽毛球">羽毛球
      <input 
      type="checkbox"
      v-model="hobbies"
      name="hobby"
      value="棒球">棒球
      <input 
      type="checkbox"
      v-model="hobbies"
      name="hobby"
      value="足球">足球
    </div>

    <div>
      性别：
      <input 
      type="radio"
      v-model="gender"
      name="gender"
      value="女">女
      <input 
      type="radio"
      v-model="gender"
      name="gender"
      value="男">男
    </div>

    <div>
      <select v-model="friend">
        <option disabled value="">请选择你的好朋友</option>
        <option >孙悟空</option>
        <option >猪八戒</option>
        <option >沙和尚</option>
        <option >白骨精</option>
      </select>
    </div>

    <button>提交</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const text=ref("默认值")
const bool = ref(true)
const hobbies = ref([{}])
const gender = ref("女")
const friend = ref("")

function submitHandler(){
  console.log(text.value)
  //将text提交给服务器，再根据服务器返回的数据做后续的操作
}
</script>

<style>

</style>