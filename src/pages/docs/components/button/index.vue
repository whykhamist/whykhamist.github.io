<template>
  <div
    class="relative flex min-h-full max-w-full flex-auto flex-col rounded-2xl"
  >
    <div class="p-5 text-7xl font-bold">Button</div>
    <div class="p-5">
      <TCard class="h-screen max-h-screen-65 max-w-3xl">
        <TCardHeader>
          <TCardTitle class="!text-2xl !font-bold"> Button PROPS </TCardTitle>
        </TCardHeader>
        <TCardBody class="divide-y divide-foreground/25 !p-0">
          <InfoBlock
            name="label"
            type="String | null"
            description="The text that will be shown on the button"
          />
          <div class="h-screen"></div>
        </TCardBody>
        <TCardFooter class="!min-h-[1rem]"> </TCardFooter>
      </TCard>
      <div class="text-3xl font-semibold"></div>
      <div class="px-5"></div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const InfoBlock = defineAsyncComponent(() => import("../infoBlock.vue"));

const disabled = ref(false);
</script>
