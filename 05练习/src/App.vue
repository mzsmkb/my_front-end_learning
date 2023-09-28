<template>
  <Tab>
    <template #0>
      <TabList :item="players" :max-hot="palyersFirstHot"></TabList>
    </template>

    <template #1>
      <TabList :item="teams" :max-hot="teamsFirstHot"></TabList>
    </template>
    
    
  </Tab>  
  
</template>

<script setup>
import {ref,reactive} from "vue"
import TabItem from "./components/TabItem.vue";
import TabList from './components/TabList.vue'
import Tab from "./components/Tab.vue"


const players =reactive([
  {
    name:"梅西",
    img:"/messi.jpg",
    rate:1,
    hot:43333,
  },
  {
    name:"内马尔",
    img:"/neymar.jpg",
    rate:2,
    hot:33333,
  },
  {
    name:"阿尔瓦雷斯",
    img:"/spider.jpg",
    rate:3,
    hot:23333,
  },

])

const palyersFirstHot = players[0].hot


const teams =([
  {
    name:'阿根廷',
    img:"/argentina.jpg",
    rate:1,
    hot:314322,
  },
  {
    name:'法国',
    img:"/france.jpg",
    rate:2,
    hot:224322,
  },
  {
    name:'英格兰',
    img:"/england.jpg",
    rate:3,
    hot:174322,
  },
])

const teamsFirstHot = teams[0].hot


</script>


