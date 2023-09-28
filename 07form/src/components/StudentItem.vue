<template>
  <tbody>
        <tr v-for="(stu,index) in students" key="id">
            <td>{{ stu.id  }}</td>
            <td>{{ stu.name  }}</td>
            <td>{{ stu.age  }}</td>
            <td>{{ stu.gender  }}</td>
            <td>{{ stu.address  }}</td>
            <td>
                <a href="#" @click.prevent="$event => delStudentHandler(index)">删除</a>
            </td>
        </tr>
 </tbody>
</template>

<script setup>
import { ref,inject } from 'vue'

const {students,delStudentByIndex} = inject("student")

const delStudentHandler= (index)=>{
    // emits('delStu',index)
    delStudentByIndex(index)
}

</script>

<style>
table {
    width: 80%;
    border-collapse: collapse;
}

caption {
    font-size: 30px;
    font-weight: bold;
}

th,td {
    border: 1px solid black;
    font-size: 24px;
}
</style>