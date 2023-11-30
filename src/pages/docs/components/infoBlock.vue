<template>
  <div class="grid gap-2 px-3 py-2">
    <div class="flex items-center gap-2 text-xl text-gray-500">
      <span
        class="rounded-md bg-teal-700 px-2 font-semibold leading-tight text-light"
      >
        {{ name }}
      </span>
      <span class="font-black">:</span>
      <span class="font-bold"> {{ type }} </span>
    </div>
    <div class="">
      <div class="text-xl font-bold text-gray-500">Description</div>
      <div class="px-2" v-html="description"></div>
    </div>
    <div v-if="!!defaultVal" class="">
      <div class="text-xl font-bold text-gray-500">Default Value</div>
      <div class="flex flex-wrap gap-2 px-2">
        <span
          class="rounded-md border border-foreground bg-teal-700/25 px-2 py-0.5 font-semibold leading-tight"
          v-html="defaultVal"
        />
      </div>
    </div>
    <div v-if="examples.length > 0" class="">
      <div class="text-xl font-bold text-gray-500">Examples</div>
      <div class="flex flex-wrap gap-2 px-2">
        <template v-for="ex in examples" :key="ex">
          <span
            class="rounded-md border border-foreground bg-teal-700/25 px-2 py-0.5 font-semibold leading-tight"
            v-html="ex"
          />
        </template>
      </div>
    </div>

    <div v-if="params.length > 0" class="">
      <div class="text-xl font-bold text-gray-500">Parameters</div>
      <div class="grid gap-2 px-2">
        <template v-for="param in params" :key="param">
          <div
            class="rounded-md border border-foreground/25 bg-teal-700/5 px-3 py-2"
          >
            <div class="flex items-center gap-2 text-xl text-gray-500">
              <span
                class="rounded-md bg-amber-700 px-2 font-semibold leading-tight text-light"
              >
                {{ param.name }}
              </span>
              <span class="font-black">:</span>
              <span class="font-bold"> {{ param.type }} </span>
            </div>
            <div class="">
              <div class="text-xl font-bold text-gray-500">Description</div>
              <div class="px-2" v-html="param.description"></div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  name: String,
  type: String,
  description: {
    type: String,
    default: "",
  },
  defaultVal: {
    type: String,
    default: null,
  },
  examples: {
    type: Array,
    default: [],
  },
  params: {
    type: Array,
    default: [],
  },
});
</script>
