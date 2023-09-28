  <template>
    <button>
        <slot></slot>
        <slot name="aa"></slot>
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  </script>
  
  <style>
  
  </style>