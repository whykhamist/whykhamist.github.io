<template>
  <div class="grid gap-2 divide-y divide-primary/25">
    <div class="text-4xl font-bold uppercase text-primary">
      {{ title }}
    </div>
    <div class="text-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  title: String,
});
</script>
