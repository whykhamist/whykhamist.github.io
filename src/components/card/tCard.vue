<template>
  <component
    :is="tag"
    ref="cardRef"
    class="flex flex-col rounded-2xl border border-foreground/25 bg-background-accent shadow-md after:shadow-slate-700 after:dark:shadow-slate-100"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

const cardRef = ref(null);
const cardBody = computed(() =>
  cardRef.value?.querySelectorAll(".__card_body__")
);

watch(cardRef, (val) => {
  console.log(val);
});
</script>
