 <template>
  <button @click="isShow = !isShow">切换</button>
  <component :is="isShow ? A : B"></component>
</template>

<script setup>

import { ref } from 'vue';
import A from './components/A.vue'
import B from './components/B.vue'
const isShow = ref(true)


</script>

<style>

</style>