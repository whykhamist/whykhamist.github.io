<template>
  <div
    class="relative flex min-h-full max-w-full flex-auto flex-col gap-5 rounded-2xl"
  >
    <slot name="title">
      <div class="text-7xl font-bold">{{ title }}</div>
    </slot>
    <slot name="intro"> </slot>
    <InfoCard
      v-if="!!properties"
      id="props"
      label="PROPS"
      :info="properties"
      class="max-h-screen-65 bg-opacity-25"
    />
    <InfoCard
      v-if="!!events"
      id="events"
      label="EVENTS"
      :info="events"
      class="max-h-screen-65 bg-opacity-25"
    />
    <InfoCard
      v-if="!!slots"
      id="slots"
      label="SLOTS"
      :info="slots"
      class="max-h-screen-65 bg-opacity-25"
    />
    <slot> </slot>
    <div class="h-32"></div>
  </div>
</template>

<script setup>
import {
  computed,
  defineAsyncComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const rtlSideBar = inject("rtlSideBar");
const InfoCard = defineAsyncComponent(() => import("./infoCard.vue"));

const $screen = useBreakpoints(breakpointsTailwind);

const props = defineProps({
  title: String,
  dir: {
    type: Array,
    default: () => [],
  },
  properties: {
    type: Object,
    default: null,
  },
  events: {
    type: Object,
    default: null,
  },
  slots: {
    type: Object,
    default: null,
  },
});

const contents = computed(() => {
  let _conts = [];
  if (!!props.properties) {
    _conts.push({
      label: "Properties",
      name: "props",
    });
  }
  if (!!props.events) {
    _conts.push({
      label: "Events",
      name: "events",
    });
  }
  if (!!props.slots) {
    _conts.push({
      label: "Slots",
      name: "slots",
    });
  }
  if (Array.isArray(props.dir) && props.dir.length > 0) {
    _conts = [..._conts, ...props.dir];
  }

  return _conts;
});

const scrollTo = (el) => {
  let y = el.getBoundingClientRect().top + window.scrollY - 120;
  window.scroll({ top: y, behavior: "smooth" });
};

const scrollToHash = (name) => {
  let el = document.querySelector(name);
  !!el && scrollTo(el);
};

watch(contents, (val) => {
  rtlSideBar.value.menu = val;
});

onMounted(() => {
  rtlSideBar.value.menu = contents.value;
  if (!!route.hash)
    setTimeout(() => {
      scrollToHash(route.hash);
    }, 500);
});

onBeforeUnmount(() => {
  rtlSideBar.value.menu = [];
});
</script>
