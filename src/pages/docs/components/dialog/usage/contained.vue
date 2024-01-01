<template>
  <div class="relative flex flex-col rounded-lg border-4 border-foreground/25">
    <div
      class="flex items-center gap-2 border-b border-foreground/25 px-3 py-1"
    >
      <TButton
        label="Open Contained Dialog"
        class="rounded-md border border-primary bg-primary/25 px-3 py-1"
        @click="dialog = !dialog"
      />
    </div>
    <div class="max-h-screen-50 min-h-screen-65 overflow-auto">
      <p v-for="index in 100" :key="`sample_text_${index}`" class="px-3 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi
        quaerat magni maxime suscipit doloremque, modi cupiditate aliquid
        perspiciatis deleniti earum unde perferendis minus obcaecati est numquam
        ratione veniam? Cumque?
      </p>
    </div>

    <TDialog v-model="dialog" contain v-slot="{ close }">
      <TCard
        class="max-h-screen-45 w-screen-95 max-w-xs bg-gray-500 text-white"
      >
        <TCardHeader class="text-foreground">
          <TCardTitle>Contained</TCardTitle>
          <TButton icon="close" iconSize="sm" @click="close" />
        </TCardHeader>
        <TCardBody>
          <p
            v-for="index in 25"
            :key="`sample_text_${index}`"
            class="px-3 py-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi
            quaerat magni maxime suscipit doloremque, modi cupiditate aliquid
            perspiciatis deleniti earum unde perferendis minus obcaecati est
            numquam ratione veniam? Cumque?
          </p>
        </TCardBody>
      </TCard>
    </TDialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
</script>
