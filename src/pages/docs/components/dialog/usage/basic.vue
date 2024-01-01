<template>
  <div class="flex items-center gap-2">
    <TButton
      label="Open Dialog"
      class="rounded-md border border-primary bg-primary/25 px-3 py-1"
      @click="dialog = !dialog"
    />

    <TDialog v-model="dialog" v-slot="{ close }">
      <TCard class="w-screen-95 max-w-xs">
        <TCardBody>
          <div class="flex items-center gap-2 py-3">
            <div class="flex-auto text-3xl font-bold">Hi!</div>
            <TButton
              icon="close"
              iconSize="sm"
              class="rounded-full p-1"
              @click="close"
            />
          </div>

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ea
          aut animi. Ullam, similique distinctio natus, recusandae laborum quis
          et dignissimos quia architecto ducimus sint incidunt? Cupiditate
          facilis optio voluptates.
        </TCardBody>
      </TCard>
    </TDialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
</script>
