<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="changemsg">点我改变msg</button>
  </div>
</template>

<script>
// import { shallowReactive, ShallowReactive } from 'vue';
export default {
  data(){
    
    return {
      msg:"我爱VUE",
    }
  },


  /**
      methods 用来指定实例对象中的方法
        - 他是一个对象，可以在他里边定义多个方法
        - 这些方法最终将会被挂载到组件实例上
        - 可以直接通过组件实例来调用这些方法
        - 所有组件实例上的属性都可以在模板中直接访问
        - methods中函数的this会被自动绑定为组件实例
   */

  methods:{
    sum(a,b){
      console.log(this)//组件实例 vm
      return a+b
    },
    changemsg(){
      this.msg = "这是新的改动！"
    }
  }
}
</script>

<style>

</style>