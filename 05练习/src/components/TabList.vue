<template>
  <div class="tab-list">
    <!-- <TabItem :item="players[0]" :first-hot="palyersFirstHot"></TabItem>
    <TabItem :item="players[1]" :first-hot="palyersFirstHot"></TabItem>
    <TabItem :item="players[2]" :first-hot="palyersFirstHot"></TabItem> -->
    <TabItem v-for="player in props.item" :item="player" :first-hot="props.maxHot"></TabItem>
  </div>
</template>

<script setup>
import TabItem from './TabItem.vue';
    const props = defineProps(['item','maxHot'])
    console.log(props.item)
</script>

<style>
.tab-list {
  margin: 20px;
}
</style>