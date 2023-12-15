<template>
  <PageBlock
    title="Size Observer"
    :properties="compProps"
    :events="compEvents"
    :slots="compSlots"
    :dir="content"
  >
    <template #intro>
      <div>
        <div class="text-xl">
          Watch changes to the parent element's size. This uses Javascript's
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"
            class="font-semibold text-primary hover:underline"
            target="_blank"
          >
            Resize Observer API </a
          >.
        </div>
      </div>
    </template>

    <div ref="sample" class="flex flex-col gap-5">
      <div class="py-5 text-5xl font-bold text-primary">Usage</div>
      <div
        class="max-w-3xl rounded-2xl border-4 border-foreground/25 px-3 py-1 font-mono dark:bg-dark dark:text-light"
      >
        <CodeBlock
          :code="'<SizeObserver @resize=\'onResize\' />\nOR\n<size-observer  @resize=\'onResize\'/>'"
          class="font-bold"
        />
      </div>
      <Usage />
    </div>
  </PageBlock>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, onMounted } from "vue";

import compProps from "./props.json";
import compEvents from "./events.json";
import compSlots from "./slots.json";

const Usage = defineAsyncComponent(() => import("./usage.vue"));
const PageBlock = defineAsyncComponent(() =>
  import("../../utils/pageBlock.vue")
);
const CodeBlock = defineAsyncComponent(() =>
  import("../../utils/codeBlock.vue")
);

const sample = ref(null);

const content = computed(() => [
  {
    label: "Usage",
    el: sample.value,
    name: "usage",
  },
]);
</script>
