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
      <TCard class="h-full w-full !rounded-none">
        <TCardHeader>
          <TCardTitle></TCardTitle>
          <TButton icon="minimize" />
          <TButton icon="square" />
          <TButton icon="close" @click="close" />
        </TCardHeader>
        <TCardBody>
          <RickRolled class="text-foreground" />
        </TCardBody>
        <TCardFooter />
      </TCard>
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
