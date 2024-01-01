<template>
  <div
    class="relative w-screen-95 max-w-sm select-none rounded-lg border border-gray-600/25 bg-gray-600/5 shadow-md shadow-foreground/25 backdrop-blur-md transition-all after:pointer-events-none"
  >
    <slot name="before" />
    <div class="flex items-center gap-2 px-5 py-2">
      <TImage src="/samples/oots.jpg" class="aspect-square w-16 rounded-md" />
      <dl>
        <dt class="sr-only">title</dt>
        <dd class="font-bold leading-tight">Pinivi</dd>
        <dt class="sr-only">artist</dt>
        <dd class="font-medium leading-tight">Order of the Scarlet</dd>
        <dt class="sr-only">album</dt>
        <dd class="leading-tight">Pinivi</dd>
      </dl>
    </div>
    <div class="px-5 py-1">
      <TProgress :value="48" class="!min-h-[0.5rem]" />
      <div class="flex items-center text-xs">
        <div class="flex-auto font-semibold">2:42</div>
        <span class=""> 5:04 </span>
      </div>
    </div>
    <div
      class="flex items-center justify-evenly gap-1 rounded-b-md border-t border-foreground/25 bg-dark/10 px-2 py-1"
    >
      <TButton
        :icon="favorite ? 'favorite' : 'favorite_border'"
        class="rounded-full p-1"
        :class="{ 'text-primary': favorite }"
        @click="favorite = !favorite"
      />
      <TButton
        icon="shuffle"
        class="rounded-full p-1"
        :class="{ 'text-primary': shuffle }"
        @click="shuffle = !shuffle"
      />
      <TButton icon="fast_rewind" class="rounded-full p-1" />
      <TButton icon="skip_previous" class="rounded-full p-1" />
      <span
        class="flex origin-center scale-[2] items-center justify-center px-3"
      >
        <TButton
          class="rounded-full border border-gray-600/25 bg-gray-600 text-light shadow-lg shadow-foreground/25"
          @click="play = !play"
        >
          <div
            class="pointer-events-none flex items-center justify-center gap-1"
          >
            <TIcon :name="play ? 'pause' : 'play_arrow'" type="filled" />
          </div>
        </TButton>
      </span>
      <TButton icon="skip_next" class="rounded-full p-1" />
      <TButton icon="fast_forward" class="rounded-full p-1" />
      <TButton
        icon="repeat"
        class="rounded-full p-1"
        :class="{ 'text-primary': repeat }"
        @click="repeat = !repeat"
      />
      <TButton icon="queue_music" class="rounded-full p-1" />
    </div>
    <slot name="after" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const play = ref(false);
const shuffle = ref(false);
const favorite = ref(false);
const repeat = ref(false);
</script>
