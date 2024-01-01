<template>
  <div class="flex items-center gap-2">
    <TButton
      label="Full Width"
      class="rounded-lg border border-primary bg-primary/25 px-3 py-1"
      @click="openDialog('width')"
    />
    <TButton
      label="Full Height"
      class="rounded-lg border border-primary bg-primary/25 px-3 py-1"
      @click="openDialog('height')"
    />
    <TButton
      label="Full Screen"
      class="rounded-lg border border-primary bg-primary/25 px-3 py-1"
      @click="openDialog('screen')"
    />

    <TDialog
      v-model="dialog"
      :fullWidth="type == 'width'"
      :fullHeight="type == 'height'"
      :fullScreen="type == 'screen'"
      v-slot="{ close }"
    >
      <div
        class="flex h-full max-h-screen min-h-screen-35 w-full min-w-screen-35 max-w-screen flex-col bg-background-accent"
      >
        <div class="flex items-center gap-1 bg-background px-3">
          <div class="flex-auto"></div>
          <TButton icon="minimize" />
          <TButton icon="square" />
          <TButton icon="close" @click="close" />
        </div>
        <div class="flex-auto overflow-y-scroll p-3">
          <RickRolled />
        </div>
        <div class="min-h-4 bg-background"></div>
      </div>
    </TDialog>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const RickRolled = defineAsyncComponent(() =>
  import("../../../utils/widgets/ricked.vue")
);

const type = ref("width");
const dialog = ref(false);

const openDialog = (t) => {
  type.value = t;
  dialog.value = true;
};
</script>
