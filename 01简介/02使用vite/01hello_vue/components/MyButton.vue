<template>
  <div>
    <button @click="count++">点一波，{{ count }}</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            count:0
        }
    },
}
</script>

<style>

</style>