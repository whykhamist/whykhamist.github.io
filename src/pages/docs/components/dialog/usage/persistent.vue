<template>
  <div class="">
    <TButton
      label="Open Persistent Dialog"
      class="rounded-lg border border-primary bg-primary/25 px-3 py-1"
      @click="dialog = !dialog"
    />
    <TDialog v-model="dialog" persistent v-slot="{ close }">
      <TCard class="max-h-screen-95 w-screen-95 max-w-md">
        <TCardHeader class="gap-2">
          <TCardTitle> Persistent Dialog </TCardTitle>
          <TButton
            icon="add"
            class="rounded-md border border-foreground/25 px-3 py-1"
            @click="addCount"
          />
          <TButton
            icon="remove"
            class="rounded-md border border-foreground/25 px-3 py-1"
            @click="reduceCount"
          />
          <TButton
            icon="close"
            iconSize="sm"
            class="rounded-full p-1"
            @click="close"
          />
        </TCardHeader>
        <TCardBody>
          <p
            v-for="index in count"
            :key="`persistent_sample_${index}`"
            class="px-3 py-2"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            quod, ipsa voluptate minus laborum accusantium? Sed, minima dicta
            reprehenderit vero qui est, exercitationem error aut neque ratione
            aliquam alias. Maxime.
          </p>
        </TCardBody>
      </TCard>
    </TDialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);

const count = ref(5);

const addCount = () => {
  count.value += 5;
};

const reduceCount = () => {
  count.value -= 5;
};
</script>
