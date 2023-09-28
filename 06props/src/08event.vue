<template>
  <h1>{{ count }}</h1>

  <!--
    为元素绑定事件：
      ① 绑定事件使用v-on指令
        v-on：事件名
        @事件名
      ② 绑定事件的两种方式
        a. 内联事件处理器（自己调用函数)
          - 事件触发时，直接执行js语句
          - 回调函数的参数由我们自己传递

        b. 方法事件触发器（vue帮我们调用的函数)
          - 事件触发时，vue会对事件的函数调用
          - 回调函数的参数由vue帮我们传
              - 参数就是事件对象event

      vue如何判断：
        检查事件的值是否是合法的js标识符（变量名）或属性访问路径，
          如果是，则表示它是方法事件触发器
          否则，表示它是内联


  -->

  <!-- 内联-->
  <button v-on:click="count++">点我一下</button>
  <hr>
  <!-- 方法事件触发器-->
  <button @click="clickHandler">也来点点我</button>
  <!-- 内联-->
  <button @click="clickHandler2($event,1,'hello')">也来点点我</button>



  <!--冒泡事件会发生
    两个方法：
      1、直接vue中的.stop
      2、可以在boxHandler2()中使用event.stopPagation()
  -->
  <!-- <div class="box1" @click="boxHandler2('box1')">
    box1
    <div class="box2" @click="boxHandler2('box2')">
      box2
      <div class="box3" @click="boxHandler2('box3')">
          box3
      </div>
    </div>
  </div> -->

  <!-- 解决冒泡1 -->
  <!-- <div class="box1" @click="boxHandler2('box1')">
    box1
    <div class="box2" @click.stop="boxHandler2('box2')">
      box2
      <div class="box3" @click.stop="boxHandler2('box3')">
          box3
      </div>
    </div>
  </div> -->

  <!-- 解决冒泡2 -->
  <div class="box1" @click="boxHandler2($event,'box1')">
    box1
    <div class="box2" @click="boxHandler2($event,'box2')">
      box2
      <div class="box3" @click="boxHandler2($event,'box3')">
          box3
      </div>
    </div>
  </div>




</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)

function clickHandler(event){
  /**
      方法事件处理器的回调函数，vue会将事件对象作为参数传递
      这个事件对象是DOM中原生的事件对象，它里边包含了事件触发时的相关信息
      通过该对象，可以获取：触发事件的对象，触发事件的一些情况
      同时通过该对象，也可以对事件进行一些配置：取消事件的传播、取消事件的默认行为
   */
  console.log(event)
}

function clickHandler2(...args){
  /**
   *  内联事件处理器，回调函数由我们自己调用，参数也是我们自己传递的
      可以通过$event来访问事件对象
   */
  console.log(args)
}

function boxHandler2(event,text){
  event.stopPropagation()
  alert(text)
}

</script>

<style>
.box1 {
  background-color: aquamarine;
  width: 800px;
  height: 400px;
}

.box2 {
  background-color:blue;
  width: 400px;
  height: 200px;
}

.box3 {
  background-color:red;
  width: 200px;
  height: 100px;
}
</style>