<template>
  <div
    class="relative rounded-md border border-negative bg-negative/25 p-3 text-foreground transition-all"
    :style="style"
  >
    <TButton
      label="Change Size"
      class="rounded-md bg-primary bg-glossy px-3 py-1 text-light"
      @click="changeSize"
    />
    <SizeObserver v-slot="{ size }">
      <div
        class="absolute inset-x-0 bottom-1 flex items-center justify-center gap-2 font-mono"
      >
        <span
          class="rounded-md border border-negative bg-negative/25 px-2 py-1 text-sm"
        >
          <b>Width</b>: {{ Math.ceil(size.width) }}px
        </span>
        <span
          class="rounded-md border border-negative bg-negative/25 px-2 py-1 text-sm"
        >
          <b>Height</b>: {{ Math.ceil(size.height) }}px
        </span>
      </div>
    </SizeObserver>
  </div>
</template>

<script setup>
import { ref } from "vue";

const style = ref({
  width: "300px",
  height: "200px",
});

const changeSize = () => {
  style.value.width = Math.floor(300 + Math.random() * 400) + "px";
  style.value.height = Math.floor(100 + Math.random() * 200) + "px";
};
</script>
