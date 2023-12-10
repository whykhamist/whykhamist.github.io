<template>
  <div class="grid gap-2 overflow-x-auto px-3 py-2">
    <div class="flex items-center gap-2 text-xl text-gray-500">
      <span
        class="rounded-md bg-teal-700 px-2 font-semibold leading-tight text-light"
      >
        {{ name }}
      </span>
      <span class="font-black">:</span>
      <span class="font-bold" v-html="type" />
    </div>
    <Descriptor v-if="!!description" :description="description" />
    <div v-if="!!defaultVal" class="">
      <div class="text-xl font-bold text-gray-500">Default Value</div>
      <div class="flex flex-wrap gap-2 px-2">
        <CodeBlock
          :code="defaultVal"
          class="break-words rounded-md border border-teal-700 bg-teal-700/25 px-2 py-0.5 font-semibold leading-tight"
        />
      </div>
    </div>
    <div v-if="examples.length > 0" class="">
      <div class="text-xl font-bold text-gray-500">Examples</div>
      <div class="flex flex-wrap gap-2 px-2">
        <template v-for="ex in _examples" :key="ex">
          <CodeBlock
            class="rounded-md border border-teal-700 bg-teal-700/25 px-2 py-0.5 font-semibold leading-tight"
            :code="ex"
          />
        </template>
        <TIcon
          name="more_horiz"
          iconSize="sm"
          v-if="examples.length > 10 && !_ex.expand"
        />
        <TButton
          v-if="examples.length > 10"
          :icon="_ex.expand ? 'remove' : 'add'"
          iconSize="sm"
          class="rounded-md border border-teal-700 bg-teal-700 px-2 py-0.5 font-semibold leading-tight text-light"
          :iconClass="['transition-all', _ex.expand && 'rotate-180']"
          @click="_ex.expand = !_ex.expand"
        />
      </div>
    </div>

    <SubInfo v-if="params.length > 0" label="Parameters" :params="params" />
    <SubInfo v-if="scopes.length > 0" label="Scopes" :params="scopes" />
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from "vue";

const CodeBlock = defineAsyncComponent(() => import("./codeBlock.vue"));
const SubInfo = defineAsyncComponent(() => import("./subInfo.vue"));
const Descriptor = defineAsyncComponent(() => import("./description.vue"));

const props = defineProps({
  name: String,
  type: String,
  description: {
    type: String,
    default: "",
  },
  defaultVal: {
    type: [String, Number],
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
  scopes: {
    type: Array,
    default: [],
  },
});

const _ex = ref({
  expand: false,
});

const _examples = computed(() => {
  let result = props.examples;

  if (props.examples.length > 10) {
    result = !_ex.value.expand ? props.examples.slice(0, 10) : props.examples;
  }
  return result;
});
</script>
