<template>
  <PageBlock title="Button" :properties="ButtonProps" :events="ButtonEvents">
    <div class="grid gap-5">
      <div
        v-if="false"
        class="max-w-3xl rounded-lg border border-foreground/25 bg-background-accent"
      >
        <div class="flex items-center px-3">
          <div class="flex-auto text-3xl font-bold text-primary">Basic</div>
        </div>
        <div class="flex items-center gap-2 p-5">
          <TButton label="Button 1" class="rounded-md px-3 py-1" />
          <TButton
            label="Button 2"
            class="rounded-md bg-primary px-3 py-1 text-light"
          />
          <TButton
            label="Button 3"
            class="rounded-md bg-negative px-3 py-1 text-light"
          />
          <TButton
            label="Button 4"
            class="rounded-md bg-warning px-3 py-1 text-dark"
          />
          <TButton
            label="Button 4"
            class="rounded-md bg-info px-3 py-1 text-dark"
          />
        </div>
      </div>
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
</script>
