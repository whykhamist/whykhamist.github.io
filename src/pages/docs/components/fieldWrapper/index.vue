<template>
  <PageBlock title="Field Wrapper" :properties="compProps" :slots="compSlots">
    <template #intro>
      <div class="px-3 py-1 text-lg">
        This component is primarily used to wrap your input elements to get a
        consistent style and effects across your form fields.
      </div>
      <div class="flex items-center gap-2 px-3 py-1">
        <CompLink label="TInput" :to="{ name: 'input' }" />
      </div>
    </template>
  </PageBlock>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import compProps from "./props.json";
import compSlots from "./slots.json";

const PageBlock = defineAsyncComponent(() =>
  import("../../utils/pageBlock.vue")
);
const CompLink = defineAsyncComponent(() => import("../../utils/compLink.vue"));
</script>
