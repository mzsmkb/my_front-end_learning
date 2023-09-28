<template>
  <h2>我是MyBox子组件,这是count: {{ props.count }}</h2>
  <hr>
  <h2>我是MyBox子组件,这是obj.count: {{ props.obj.count }}</h2>
  <button @click="props.count++">(改count)这是MyBox组件的按钮</button>
  <button @click="props.obj.count++">(改obj的count)MyBox</button>
</template>

<script setup>
 /**
  *     父组件可以通过props来向子组件传递数据
  *         注意：父组件传递给子组件的props都是可读的，无法修改
  *             即使可修改，我们也尽量不要在子组件中去修改父组件的数据
  *             如果非得要改，具体方法后边再讲（自定义事件）
  *         对象不可改，但是对象里的属性可以改，类似与const，只对第一层有效
  * 
  *     
  */



//   简单配置
// const props = defineProps(["count","obj"])

// 复杂配置
//这样可以限制传参的类型
const props = defineProps({
    count:Number,
    obj:Object,
    maxLength:{
        type:String,
        required:true,
        default:"哈哈",
        validator(value){
            return value !== "嘻嘻"
        }
    }
})

console.log(props.count)
</script>

<style>

</style>