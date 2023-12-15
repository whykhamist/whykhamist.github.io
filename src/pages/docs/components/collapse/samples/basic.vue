<template>
  <div>
    <TButton
      label="Toggle"
      class="rounded-md border border-primary bg-primary/25 px-3 py-1"
      @click="expand = !expand"
    />
    <TCollapse v-model="expand">
      <div class="px-3 py-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla,
        quia obcaecati eum aliquam totam! A officiis nesciunt nulla delectus,
        eos placeat eaque repellat odio impedit, at eum? Deleniti, aspernatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla,
        quia obcaecati eum aliquam totam! A officiis nesciunt nulla delectus,
        eos placeat eaque repellat odio impedit, at eum? Deleniti, aspernatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla,
        quia obcaecati eum aliquam totam! A officiis nesciunt nulla delectus,
        eos placeat eaque repellat odio impedit, at eum? Deleniti, aspernatur.
      </div>
    </TCollapse>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expand = ref(false);
</script>
