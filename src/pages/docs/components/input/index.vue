<template>
  <PageBlock title="Input" :properties="compProps"></PageBlock>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import compProps from "./props.json";

const PageBlock = defineAsyncComponent(() => import("../pageBlock.vue"));
</script>
