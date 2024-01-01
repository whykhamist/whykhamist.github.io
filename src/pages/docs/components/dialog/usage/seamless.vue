<template>
  <div>
    <TButton
      label="Open Seamless Dialog"
      class="rounded-lg border border-primary bg-primary/25 px-3 py-1"
      @click="dialog = !dialog"
    />

    <TDialog
      v-model="dialog"
      position="bottom"
      transition="slide-up"
      seamless
      v-slot="{ close }"
    >
      <MusicPlayer>
        <template #after>
          <span class="absolute right-1 top-1">
            <TButton
              icon="close"
              iconSize="sm"
              class="rounded-full p-1"
              @click="close"
            />
          </span>
        </template>
      </MusicPlayer>
    </TDialog>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const MusicPlayer = defineAsyncComponent(() =>
  import("../../../utils/widgets/musicPlayer.vue")
);

const dialog = ref(false);
</script>
