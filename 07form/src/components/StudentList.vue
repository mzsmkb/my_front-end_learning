<template>
  <table>
    <caption>
        学生列表
    </caption>
    <thead>
        <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>住址</th>
            <th>操作</th>
        </tr>
    </thead>
    <!-- tbody -->
    <StudentItem></StudentItem>

  </table>
</template>

<script setup>
import { ref } from 'vue'
import StudentItem from './StudentItem.vue';

//通过defineProps定义的属性在attrs中就不存在了
// 使用自定义属性时，最好通过defineProps来声明一下
const props = defineProps(["students"])


</script>

<style scoped>


th,td {
    border: 1px solid black;
    font-size: 24px;
}
</style>