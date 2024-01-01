<template>
  <TCard class="relative border-4 bg-opacity-25">
    <TCardHeader class="border-none">
      <TCardTitle class="!text-2xl !font-bold"> {{ label }} </TCardTitle>
      <TButton
        v-if="!!slots.default"
        icon="code"
        class="rounded-full p-1"
        @click="expand = !expand"
      />
    </TCardHeader>
    <TCollapse :modelValue="expand || !slots.default">
      <div class="group relative flex flex-col">
        <div
          v-if="parts > 1"
          class="flex items-center border-b border-foreground/25 bg-background"
        >
          <TButton
            v-if="!!html"
            label="HTML"
            class="min-w-[3rem] border-b-2 px-3 py-2"
            :class="{
              'border-primary': codeType == 'html',
              'border-background': codeType != 'html',
            }"
            @click="codeType = 'html'"
          />
          <TButton
            v-if="!!script"
            label="Script"
            class="min-w-[3rem] border-b-2 px-3 py-2"
            :class="{
              'border-primary': codeType == 'script',
              'border-background': codeType != 'script',
            }"
            @click="codeType = 'script'"
          />
          <TButton
            v-if="!!css"
            label="CSS"
            class="min-w-[3rem] border-b-2 px-3 py-2"
            :class="{
              'border-primary': codeType == 'css',
              'border-background': codeType != 'css',
            }"
            @click="codeType = 'css'"
          />
          <TButton
            v-if="!!rawCode && parts > 1"
            label="All"
            class="min-w-[3rem] border-b-2 px-3 py-2"
            :class="{
              'border-primary': codeType == 'all',
              'border-background': codeType != 'all',
            }"
            @click="codeType = 'all'"
          />
        </div>
        <div class="h-screen max-h-screen-75 overflow-auto px-3 py-2">
          <CodeBlock v-if="!!html && codeType == 'html'" :code="html" />
          <CodeBlock v-if="!!script && codeType == 'script'" :code="script" />
          <CodeBlock v-if="!!css && codeType == 'css'" :code="css" />
          <CodeBlock v-if="!!rawCode && codeType == 'all'" :code="rawCode" />
        </div>
        <span
          class="absolute right-4 top-10 opacity-0 transition-opacity group-hover:opacity-75"
        >
          <TButton
            icon="content_copy"
            class="rounded-md border-2 bg-blue-700/10 p-1"
            @click="copyCode"
          />
        </span>
      </div>
    </TCollapse>
    <TCardBody
      v-if="!!slots.default"
      class="flex flex-col border-t border-foreground/25 bg-background"
    >
      <slot></slot>
    </TCardBody>
  </TCard>
</template>

<script setup>
import {
  computed,
  defineAsyncComponent,
  onMounted,
  ref,
  useSlots,
  watch,
} from "vue";
import { notify } from "@/scripts";

const slots = useSlots();
const props = defineProps({
  label: String,
  rawCode: String,
});

const CodeBlock = defineAsyncComponent(() => import("../utils/codeBlock.vue"));

const matchers = {
  html: /^<template>$(.|\s|\S)*?^<\/template>$/gm,
  script: /^<script[^>]*>*$(.|\s|\S)*?^<\/script>$/gm,
  css: /^<style[^>]*>*$(.|\s|\S)*?^<\/style>$/gm,
};

const expand = ref(false);
const codeType = ref("html");
const html = ref(null);
const script = ref(null);
const css = ref(null);
const parts = ref(0);

const extractCode = (raw, regex) => {
  let m = regex.exec(raw);
  return m?.[0] ?? null;
};

const splitToParts = (raw) => {
  if (!!raw) {
    html.value = extractCode(raw, matchers.html);
    script.value = extractCode(raw, matchers.script);
    css.value = extractCode(raw, matchers.css);
  }
  !!html.value && parts.value++;
  !!script.value && parts.value++;
  !!css.value && parts.value++;
};

const setFirstTab = () => {
  if (!!html.value) {
    codeType.value = "html";
  } else if (!!script.value) {
    codeType.value = "script";
  } else if (!!css.value) {
    codeType.value = "css";
  } else {
    codeType.value = "all";
  }
};

const copyCode = () => {
  let toCopy = "";
  if (codeType.value == "html") {
    toCopy = html.value;
  } else if (codeType.value == "script") {
    toCopy = script.value;
  } else if (codeType.value == "css") {
    toCopy = css.value;
  } else if (codeType.value == "all") {
    toCopy = props.rawCode;
  }
  navigator.clipboard.writeText(toCopy).then(() => {
    notify({
      type: "positive",
      title: "Success!",
      text: "Copied to clipboard",
    });
  });
};

watch(
  () => props.rawCode,
  (val) => {
    splitToParts(val);
  }
);

onMounted(() => {
  splitToParts(props.rawCode);
  setFirstTab();
});
</script>
