<template>
  <div class="">
    <div class="text-xl font-bold text-gray-500">Description</div>
    <template v-if="typeof description == 'string'">
      <div class="px-2" v-html="description" />
    </template>
    <div v-else class="flex flex-col gap-2">
      <template v-for="desc in description" :key="desc">
        <div v-if="desc.type == 'html'" class="px-2" v-html="desc.content" />
        <CodeBlock
          v-else-if="desc.type == 'code'"
          class="overflow-auto rounded-md border border-amber-700 bg-amber-700/25 px-2"
          :code="desc.content"
        />
        <div v-else class="px-2">
          {{ desc.content }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const CodeBlock = defineAsyncComponent(() => import("./codeBlock.vue"));
const props = defineProps({
  description: {
    type: [Array, String],
    default: "",
  },
});
</script>
