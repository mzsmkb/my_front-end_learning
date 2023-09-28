<template>
    <h2>A组件 {{ props.name }}</h2>
</template>

<script setup>
    const props = defineProps(['name'])
</script>