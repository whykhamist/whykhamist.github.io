<template>
  <TCard class="!rounded-r-lg">
    <TCardHeader class="gap-2">
      <TIcon :name="name" size="lg" class="rounded-lg" />
      <TCardTitle class="truncate text-2xl">
        {{ nameFormat(name) }}
      </TCardTitle>
      <TButton icon="close" class="rounded-full p-1" @click="emit('close')" />
    </TCardHeader>
    <TCardBody class="flex flex-col gap-5">
      <div class="flex items-center gap-2 font-semibold">
        <TSelect
          v-model="_type"
          :options="types.map((v) => ({ label: v, value: v }))"
          @update:modelValue="(v) => emit('update:type', v.value)"
          class="flex-auto"
        />
        <TSelect
          v-model="size"
          :options="sizes.map((v) => ({ label: v, value: v }))"
        />
      </div>
      <TCheckBox v-model="nl" label="Format Code" />
      <div
        class="rounded-md border border-foreground/25 bg-gray-200 px-3 py-2 dark:bg-gray-600"
      >
        <div class="flex items-center gap-2 border-b border-foreground/25 py-1">
          <div class="flex-auto text-sm font-bold leading-tight">HTML Code</div>
          <TButton
            icon="copy"
            iconSize="sm"
            class="rounded-full p-2"
            @click="copy(code)"
          />
        </div>
        <CodeBlock :code="code" class="overflow-auto py-2" />
      </div>
      <div
        class="rounded-md border border-foreground/25 bg-gray-200 px-3 py-2 dark:bg-gray-600"
      >
        <div class="flex items-center gap-2 border-b border-foreground/25 py-1">
          <div class="flex-auto text-sm font-bold leading-tight">Icon Name</div>
          <TButton
            icon="copy"
            iconSize="sm"
            class="rounded-full p-2"
            @click="copy(name)"
          />
        </div>
        <div>
          {{ name }}
        </div>
      </div>

      <div class="flex items-center justify-center">
        <TIcon :name="name" :type="_type.value" :size="size.value" />
      </div>
    </TCardBody>
    <TCardFooter> </TCardFooter>
  </TCard>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { notify } from "@/scripts";

const CodeBlock = defineAsyncComponent(() =>
  import("../../../utils/codeBlock.vue")
);

const props = defineProps({
  name: String,
  type: {
    type: String,
    default: "outlined",
    validator: (val) =>
      ["filled", "outlined", "round", "sharp", "two-tone"].indexOf(val) > -1,
  },
});

const emit = defineEmits(["close", "update:type"]);

const buildSelectedOption = (val) => {
  return { label: val, value: val };
};

const sizes = ref(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"]);
const size = ref(buildSelectedOption("md"));
const types = ref(["filled", "outlined", "round", "sharp", "two-tone"]);
const _type = ref(buildSelectedOption("outlined"));
const nl = ref(false);

const code = computed(() => {
  let nLine = nl.value ? "\n    " : " ";
  let s = size.value.value == "md" ? "" : `${nLine}size="${size.value.value}"`;
  let t =
    _type.value.value == "outlined"
      ? ""
      : `${nLine}type="${_type.value.value}"`;
  return `<TIcon${nLine}name=\"${props.name}\"${s}${t}${
    nl.value ? "\n" : ""
  }/>`;
});

const nameFormat = (name) => {
  return name.replaceAll("_", " ");
};

const copy = (str) => {
  navigator.clipboard.writeText(str);
  notify({
    text: "Copied to clipboard!",
    type: "positive",
  });
};

watch(
  () => props.type,
  (val) => {
    _type.value = buildSelectedOption(val);
  }
);

onMounted(() => {
  _type.value = buildSelectedOption(props.type);
});
</script>
