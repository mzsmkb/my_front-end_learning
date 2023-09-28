<template>
  <h4>
    ComponentC -- {{name }}--{{ age }} --{{ title }}
    --{{ stuStore.skills }}--{{ stuStore.double }}
    <!-- {{ countStore.count }} --
    <button @click="countStore.increment">按钮</button> -->
    <button @click="stuStore.growUp">长大</button>
  </h4>


  <button @click="$event => stuStore.name='齐天大圣'">直接修改name</button>
  <button @click="clickhandler">patch修改name</button>
  <button @click="$event=>stuStore.$reset()">重置</button>


</template>

<script setup>
import { ref,inject } from 'vue'
// import {countStore} from "@/store/count"
// const {count,increment} = inject("count")



import { useStudentStore } from '../store/studentStore';
import {storeToRefs} from "pinia"
const stuStore = useStudentStore()
/* 
  store实例本身就是一个reactive对象，
      可以通过它直接访问state中的数据

    但是如果直接将state数据解构出来，那么数据就会丧失响应性

  可以通过storeToRefs（）来对store进行解构，
    它可以将state和getters中的属性解构为ref属性，从而保留其响应性


  state修改：
    1、直接修改   （绕过store）
    2、通过patch修改 $patch
    3、通过$patch传函数的形式的修改
    4、直接替换state
    5、重置state



*/
// const {name,age} = stuStore

// 但是非要解构也要响应式，可以这么做：
const {name,age,title}=storeToRefs(stuStore)

const clickhandler=()=>{
  // 2、
  stuStore.$patch({
    name:"孙大圣",
    age:20,
    skills:["救命毫毛"]
  })

  //3、
  // stuStore.$patch((state)=>{
  //   state.skills.push("铁头功")
  // })

  // stuStore.skills.push("哈哈哈哈")

  // //4、
  // stuStore.$state ={name:"孙小圣"}

}

/* 
  store的订阅
    - 当store中的state发生变化时，做一些响应的操作
      - store.$subscribe(函数，配置对象)
*/

stuStore.$subscribe(
  (mutation,state) =>{
    //mutation 表示修改的信息
    // console.log(mutation.events)
    // console.log(mutation.events[0] === mutation.events[1]);
    
    // 负载
    // console.log("111",mutation.payload)

    // console.log("state变化了",state);
    
    //使用订阅时不要再回调函数中直接修改state
    //state.age++
    

  },
  {detached:true}
)

// $onAction 用来订阅action的调用
stuStore.$onAction(({name,store,args,after,onError})=>{
  /* 
    name 调用的action的名字
    store store的实例
    args  action接收到的参数
    after 可以设置一个回调函数，函数会在action成功调用后触发
    onError 可以设置一个回调函数，函数会在action调用失败后执行
  */
    after(()=>{
      console.log(name+"成功执行！")
    })

    onError((err)=>{
      console.log(name+"执行失败！",err)
    })


})

</script>

<style>

</style>