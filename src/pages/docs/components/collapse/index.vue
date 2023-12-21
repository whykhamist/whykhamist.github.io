<template>
  <PageBlock
    title="Collapse"
    :properties="compProps"
    :events="compEvents"
    :dir="content"
  >
    <div id="usage" class="flex flex-col gap-5">
      <div class="py-5 text-5xl font-bold text-primary">Usage</div>
      <div
        class="rounded-2xl border-4 border-foreground/25 px-3 py-1 font-mono dark:bg-dark dark:text-light"
      >
        <CodeBlock code="<TCollapse ...>...</TCollapse>" />
      </div>
      <Usage />
    </div>
  </PageBlock>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";

import compProps from "./props.json";
import compEvents from "./events.json";
import { useRoute } from "vue-router";

const route = useRoute();
const PageBlock = defineAsyncComponent(() =>
  import("../../utils/pageBlock.vue")
);
const CodeBlock = defineAsyncComponent(() =>
  import("../../utils/codeBlock.vue")
);
const Usage = defineAsyncComponent(() => import("./usage.vue"));

const content = ref(() => [
  {
    label: "Usage",
    name: "usage",
  },
]);
</script>
