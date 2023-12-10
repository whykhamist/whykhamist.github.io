<template>
  <router-link
    :to="to"
    :target="target"
    class="group relative flex min-h-[5rem] min-w-[10rem] items-center rounded-md border border-primary bg-primary/25 px-3"
  >
    <div
      class="w-full leading-tight transition-colors group-hover:text-primary"
    >
      <div class="text-sm">Components</div>
      <div class="flex items-center gap-2 font-bold">
        <div class="flex-auto leading-tight">
          {{ label }}
        </div>
        <TIcon :name="icon" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  label: String,
  to: Object,
  icon: {
    type: String,
    default: "link",
  },
  target: {
    type: String,
    default: "_blank",
  },
});
</script>
