<template>
    <div>
        <h1>这是App.vue文件</h1>
        <h2>{{ msg }}</h2>
        <MyButton></MyButton>
    </div>
</template>

<script>
import MyButton from '../components/MyButton.vue';
export default {
    data(){
        return {
            msg:"这是一个msg",
        }
    },
    components:{
        MyButton
    }
}
</script>

<style>

</style>