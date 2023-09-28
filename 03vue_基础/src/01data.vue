<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ stu.name }}</h2>
    <h3>{{ hello }}</h3>
  </div>
</template>

<script>
// import { shallowReactive, ShallowReactive } from 'vue';
export default {
  data(){
    //data返回的对象最终会被vue所代理

    //this.$data.xxx = "xxx" 动态添加响应式数据（不建议这么做）
    //建议将那些暂时没有使用到的属性，也添加到data返回的对象，值可以设置为null

    return {
      msg:"我爱VUE",

      //vue在构建响应式对象时，会同时将对象中的属性也做成响应式属性
      //深层响应式对象,性能会下降
      stu:{
        name:"孙悟空",
        age:18,
        gender:"男",
        friend:{
          name:"猪八戒"
        }
      },
      hello:124312
    }

    //创建浅层响应式对象
      // return shallowReactive({
      //   msg:"好呀好啊！！！",
      //   stu:{
      //   name:"孙悟空",
      //   age:18,
      //   gender:"男",
      //   friend:{
      //     name:"猪八戒"
      //   }
      // }
      // })
  }
}
</script>

<style>

</style>