<template>
  <div class="flex flex-col items-center justify-center gap-5 md:flex-row">
    <div
      class="grid grid-cols-3 gap-2 rounded-lg border border-foreground/25 p-2"
    >
      <div class="col-span-full font-bold">Positions</div>
      <TButton
        v-for="pos in positions"
        :key="pos.icon"
        :icon="pos.icon"
        iconSize="sm"
        class="rounded-md bg-primary px-3 py-1 text-light"
        @click="openDialog(pos.pos)"
      />

      <div class="col-span-full text-center text-sm font-semibold italic">
        {{ position ?? "(Select Dialog Position)" }}
      </div>
    </div>

    <div
      class="grid grid-cols-2 gap-2 rounded-lg border border-foreground/25 p-2 md:grid-cols-3"
    >
      <div class="col-span-full font-bold">Transitions</div>
      <template v-for="trans in transitions" :key="trans">
        <TRadio v-model="transition" :value="trans" :label="trans" />
      </template>
    </div>

    <TDialog
      v-model="dialog"
      :position="position"
      :transition="transition"
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
const position = ref(null);
const transition = ref("pop");

const positions = ref([
  { icon: "north_west", pos: "top-left" },
  { icon: "north", pos: "top" },
  { icon: "north_east", pos: "top-right" },
  { icon: "west", pos: "left" },
  { icon: "adjust", pos: "center" },
  { icon: "east", pos: "right" },
  { icon: "south_west", pos: "bottom-left" },
  { icon: "south", pos: "bottom" },
  { icon: "south_east", pos: "bottom-right" },
]);

const transitions = ref([
  "pop",
  "slide-left",
  "slide-right",
  "slide-up",
  "slide-down",
  "pop-slide-left",
  "pop-slide-right",
  "pop-slide-up",
  "pop-slide-down",
]);

const openDialog = (pos) => {
  position.value = pos;
  dialog.value = true;
};
</script>
