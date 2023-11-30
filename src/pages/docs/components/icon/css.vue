<template>
  <div class="flex items-center gap-1 text-sm">
    <span class="text-sky-700 dark:text-sky-300">{{ label }}</span
    >:
    <span class="text-lime-700 dark:text-lime-200">{{ val }}</span>
    <span v-if="comment" class="text-green-700 dark:text-green-400">
      /* {{ comment }} */ </span
    >;
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  label: String,
  val: String,
  comment: {
    type: String,
    default: null,
  },
});
</script>
