<template>
  <PageBlock
    title="Input"
    :properties="[...fielWrapperProps, ...compProps]"
    :events="compEvents"
    :slots="slots"
  >
    <template #intro>
      <div class="grid max-w-3xl gap-5 px-3 py-1 text-lg">
        <div class="flex items-center gap-2">
          <CompLink label="TFieldWrapper" :to="{ name: 'fieldwrapper' }" />
        </div>
        <div>
          <div class="text-2xl font-bold text-primary">Usage</div>
          <div
            class="rounded-md border border-foreground/25 px-3 py-1 font-mono dark:bg-dark dark:text-light"
          >
            <CodeBlock
              :code="'<TInput .../>\nOR\n<t-input .../>'"
              class="font-bold"
            />
          </div>
        </div>
      </div>
    </template>
  </PageBlock>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { mergeObjects } from "../../utils/fn";

import fielWrapperProps from "../fieldWrapper/props.json";
import compProps from "./props.json";
import compEvents from "./events.json";
import compSlots from "./slots.json";
import fwSlots from "../fieldWrapper/slots.json";

const PageBlock = defineAsyncComponent(() =>
  import("../../utils/pageBlock.vue")
);
const CompLink = defineAsyncComponent(() => import("../../utils/compLink.vue"));
const CodeBlock = defineAsyncComponent(() =>
  import("../../utils/codeBlock.vue")
);

const slots = computed(() => mergeObjects(fwSlots, compSlots));
</script>
