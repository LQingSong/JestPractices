<template>
  <button @click="handleClick">{{ count }}</button>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const count = ref(0);
const emit = defineEmits(['increment']);
const handleClick = () => {
  count.value += 1;
  emit('increment', count.value);
};
</script>
