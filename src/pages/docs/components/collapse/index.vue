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
        <CodeBlock
          :code="`<TCollapse ...>...</TCollapse>\nOR\n<t-collapse ...>...</t-collapse>`"
          class="font-bold"
        />
      </div>
      <Usage @load="onLoad" />
    </div>
  </PageBlock>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

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
const Usage = defineAsyncComponent(() => import("./samples/index.vue"));

const content = ref([]);

const onLoad = (e) => {
  content.value.push({
    label: "Usage",
    name: "usage",
    sub: e.dirs,
  });
};
</script>
