<template>
  <div v-if="params.length > 0" class="">
    <div class="text-xl font-bold text-gray-500">{{ label }}</div>
    <div class="grid gap-2 px-2">
      <template v-for="param in params" :key="param">
        <div class="rounded-md border border-teal-700 bg-teal-700/5 px-3 py-2">
          <div class="flex items-center gap-2 text-xl text-gray-500">
            <span
              class="rounded-md bg-amber-700 px-2 font-semibold leading-tight text-light"
            >
              {{ param.name }}
            </span>
            <template v-if="!!param.type">
              <span class="font-black">:</span>
              <span class="font-bold"> {{ param.type }} </span>
            </template>
          </div>
          <Descriptor
            v-if="!!param.description"
            :description="param.description"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const Descriptor = defineAsyncComponent(() => import("./description.vue"));

const props = defineProps({
  label: String,
  params: {
    type: Object,
    default: [],
  },
});
</script>
