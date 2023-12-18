<template>
  <div
    class="relative flex min-h-full max-w-full flex-auto flex-col gap-5 rounded-2xl"
  >
    <slot name="title">
      <div class="text-7xl font-bold">{{ title }}</div>
    </slot>
    <slot name="intro"> </slot>
    <slot name="tcontent"> </slot>
    <div class="grid gap-5">
      <div v-if="!!properties" id="props" ref="propsCard">
        <InfoCard
          label="PROPS"
          :info="properties"
          class="max-h-screen-65 bg-opacity-25"
        />
      </div>
      <div v-if="events" id="events" ref="eventsCard">
        <InfoCard
          label="EVENTS"
          :info="events"
          class="max-h-screen-65 bg-opacity-25"
        />
      </div>
      <div v-if="slots" id="slots" ref="slotsCard">
        <InfoCard
          label="SLOTS"
          :info="slots"
          class="] max-h-screen-65 bg-opacity-25"
        />
      </div>
      <slot> </slot>
    </div>
    <div class="h-32"></div>
  </div>
</template>

<script setup>
import {
  computed,
  defineAsyncComponent,
  inject,
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
    type: Object,
    default: [],
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

const propsCard = ref(null);
const eventsCard = ref(null);
const slotsCard = ref(null);

const contents = computed(() => {
  let _conts = [];
  if (!!propsCard.value) {
    _conts.push({
      label: "Properties",
      el: propsCard.value,
      name: "props",
    });
  }
  if (!!eventsCard.value) {
    _conts.push({
      label: "Events",
      el: eventsCard.value,
      name: "events",
    });
  }
  if (!!slotsCard.value) {
    _conts.push({
      label: "Slots",
      el: slotsCard.value,
      name: "slots",
    });
  }

  _conts = [..._conts, ...props.dir];

  return _conts;
});

const scrollTo = (el) => {
  let y = el.getBoundingClientRect().top + window.scrollY - 120;
  window.scroll({ top: y, behavior: "smooth" });
};

const scrollToHash = (name) => {
  let el = contents.value.find((con) => con.name == name);
  !!el?.el && scrollTo(el.el);
};

watch(contents, (val) => {
  rtlSideBar.value.menu = val;
});

onMounted(() => {
  if (!!route.hash)
    setTimeout(() => {
      scrollToHash(route.hash.replace("#", ""));
    }, 500);
});

onBeforeUnmount(() => {
  rtlSideBar.value.menu = [];
});
</script>
