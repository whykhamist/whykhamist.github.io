<template>
  <div class="max-w-xs rounded-lg border border-foreground/25 px-3 py-2">
    <TInput label="Search" v-model="search" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const search = ref();
</script>
