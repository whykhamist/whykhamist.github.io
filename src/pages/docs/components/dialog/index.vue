<template>
  <PageBlock
    title="Dialog (modal)"
    :properties="compProps"
    :events="compEvents"
    :slots="compSlots"
    :dir="content"
  >
    <div id="usage" class="flex flex-col gap-5">
      <div class="py-5 text-5xl font-bold text-primary">Usage</div>
      <div
        class="rounded-2xl border-4 border-foreground/25 px-3 py-1 font-mono dark:bg-dark dark:text-light"
      >
        <CodeBlock
          :code="'<TDialog ...>...</TDialog>\nOR\n<t-dialog ...>...</t-dialog>'"
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
import compSlots from "./slots.json";

const PageBlock = defineAsyncComponent(() =>
  import("../../utils/pageBlock.vue")
);
const CodeBlock = defineAsyncComponent(() =>
  import("../../utils/codeBlock.vue")
);

const Usage = defineAsyncComponent(() => import("./usage/index.vue"));

const content = ref([]);

const onLoad = (e) => {
  content.value.push({
    label: "Usage",
    name: "usage",
    sub: e.dirs,
  });
};
</script>
