<template>
  <TCard
    class="relative w-[calc(100dvw_-_4rem)] max-w-3xl border-4 bg-opacity-25 md:w-[calc(100dvw_-_20.5rem)]"
  >
    <TCardHeader class="border-none">
      <TCardTitle class="!text-2xl !font-bold"> {{ label }} </TCardTitle>
      <TButton icon="code" class="rounded-full p-1" @click="expand = !expand" />
    </TCardHeader>
    <TCollapse v-model="expand">
      <div class="flex flex-col">
        <div
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
            v-if="!!rawCode"
            label="All"
            class="min-w-[3rem] border-b-2 px-3 py-2"
            :class="{
              'border-primary': codeType == 'all',
              'border-background': codeType != 'all',
            }"
            @click="codeType = 'all'"
          />
        </div>
        <div class="max-h-screen-75 overflow-auto px-3 py-2">
          <CodeBlock v-if="!!html && codeType == 'html'" :code="html" />
          <CodeBlock v-if="!!script && codeType == 'script'" :code="script" />
          <CodeBlock v-if="!!css && codeType == 'css'" :code="css" />
          <CodeBlock v-if="!!rawCode && codeType == 'all'" :code="rawCode" />
        </div>
      </div>
    </TCollapse>
    <TCardBody
      class="flex flex-col border-t border-foreground/25 bg-background"
    >
      <slot></slot>
    </TCardBody>
  </TCard>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
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
};

watch(
  () => props.rawCode,
  (val) => {
    splitToParts(val);
  }
);

onMounted(() => {
  splitToParts(props.rawCode);
});
</script>
