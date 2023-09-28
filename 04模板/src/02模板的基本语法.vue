<template>
  <!--
    - 在模板中，可以直接访问到组件中声明的变量
    - 除了组件中的变量外，vue也为我们提供了一些全局变量
        比如：Date，Math，RegExp...
        除此之外，也可以通过app对象来向vue中添加一些全局变量
        app.config.golbalProperties
    - 使用插值（{{}}），只能使用表达式
        表达式，就是有返回值的语句（coonsole.log(xxx))也是返回值
    -  插值实际上就是在修改元素的textContent，
        如果内容中含有标签，标签会被转义显示，不会作为标签生效

      指令：
        - 指令模板中为标签设置的一些特殊属性，它可以使用
        - 指令使用v-开头
            v-text 将表达式的值作为元素的textContent插入，作用同{{  }}
              使用指令时，不需要通过{{  }}来指定表达式
            v-html 将表达式的值作为元素的innerHTML插入，有xss攻击的风险
  -->
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ new Date() }}</h2>
    <h3>{{ hello }}</h3>
    <h3>{{ html }}</h3>
    <h3 v-text="html"></h3>
    <h3 v-html="html"></h3>
  </div>
  
</template>

<script setup>

const msg = "我真的爱VUE！！"
const html = "<h2>这是一段html代码</h2>"

</script>

<style>

</style>