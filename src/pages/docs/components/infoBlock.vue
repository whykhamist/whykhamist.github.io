<template>
  <div class="grid gap-2 px-3 py-2">
    <div class="flex items-center gap-2 text-xl text-gray-500">
      <span class="rounded-md bg-teal-700 px-2 font-semibold text-light">
        {{ name }}
      </span>
      <span class="font-black">:</span>
      <span class="font-bold"> {{ type }} </span>
    </div>
    <div class="">
      <div class="text-xl font-bold text-gray-500">Description</div>
      <div class="">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  name: String,
  type: String,
  description: {
    type: String,
    default: "",
  },
});
</script>
