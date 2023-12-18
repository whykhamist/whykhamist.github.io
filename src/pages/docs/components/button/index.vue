<template>
  <PageBlock title="Button" :properties="ButtonProps" :events="ButtonEvents">
    <div ref="sample" class="flex flex-col gap-5">
      <div class="py-5 text-5xl font-bold text-primary">Usage</div>
      <div
        class="rounded-2xl border-4 border-foreground/25 px-3 py-1 font-mono dark:bg-dark dark:text-light"
      >
        <CodeBlock
          :code="'<TButton ... />\nOR\n<t-button  ... />'"
          class="font-bold"
        />
      </div>
      <Usage />
    </div>
  </PageBlock>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import ButtonProps from "./props.json";
import ButtonEvents from "./events.json";

const PageBlock = defineAsyncComponent(() =>
  import("../../utils/pageBlock.vue")
);
const CodeBlock = defineAsyncComponent(() =>
  import("../../utils/codeBlock.vue")
);

const Usage = defineAsyncComponent(() => import("./usage.vue"));
</script>
