<template>
  <div>
    <h1>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h1>
    <!--插值{{}}里边只能写表达式，有返回值的就是表达式-->
    <h2>评语：{{ info }}</h2>
    <button @click="changeage()">点击我修改猴哥年龄</button>
    <hr>
    <h2>{{ firstname+lastname }}</h2>
  </div>
</template>

<script>
// import { shallowReactive, ShallowReactive } from 'vue';
export default {
  data(){
    
    return {
       stu:{
        name:"孙悟空",
        age:18,
        gender:"男",
       },
      firstname:"孙",
      lastname:"悟空",

      //数组也是响应式数据，但是vue2中不是，3中采用了代理
      arr:["孙悟空",'猪八戒','唐僧']
       
    }
  },
  methods:{
    changeage(){
      this.stu.age = 17
    }
    
  },

  /**
   *  computed 用来指定计算属性
   * {
   *    属性名：getter
   * }
   *  - 计算属性，只在其依赖的数据发生变化时才会重新执行
   * - 会对数据进行缓存
   * - 只有当需要返回某属性，且需要做一些逻辑代码时使用计算属性
   * 
   * - 而methods中的方法每次组件重新渲染都会调用
   */
  computed:{
    info(){
      //在计算属性的getter中，尽量只做读取相关的逻辑
      // 不要执行那些会产生作用的代码（比如说修改了data中的属性）
      console.log("---> info调用了")
      return this.stu.age>=18 ?"成年猴!!!":"非成年猴!!!"
    },
    fullname:{
      //调用到时候是vm.fullname = "猪八戒",等于号等于号
      get(){
        return this.firstname +this.lastname
      },
      set(value){
        this.firstname=value[0],
        this.lastname=value.slice(1)
      }
    }
  }
}
</script>

<style>

</style>