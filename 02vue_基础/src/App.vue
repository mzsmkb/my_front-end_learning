<template>
  <!-- git -->
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  data(){
    //直接向组件实例中添加的属性，不会被vue所代理，不是响应式数据，修改后页面不会发生变化
    // this.name = "孙悟空"

    //vm.$data是实际的代理对象，通过vm可以直接访问到$data中的属性
    //vm.$data.msg 等价于vm.msg
    //可以通过vm.$data动态的向组件中添加响应式数据

    //data会返回一个对象作为返回值，vue会对该对象进行代理
    //  从而将其转换为响应式数据（数据变，网页变），响应式数据可以直接通过组件实例访问
    return {
      msg:"我爱VUE！"
    }
  },
  created(){
    //会在组件创建完毕后调用
    //可以通过vm.$data动态地向组件中添加响应式数据，但是不建议这么做，建议都写在data（）的return返回值中
    this.$data.name = "孙悟空"
  }
}
</script>

<style>

</style>