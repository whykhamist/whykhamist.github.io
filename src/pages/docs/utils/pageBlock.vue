<template>
  <div
    class="relative flex min-h-full max-w-full flex-auto flex-col gap-5 rounded-2xl px-5"
  >
    <slot name="title">
      <div class="text-7xl font-bold">{{ title }}</div>
    </slot>
    <slot name="intro"> </slot>
    <slot name="tcontent">
      <div v-if="contents.length > 0" class="px-7 text-xl font-semibold">
        Content
        <ul
          class="select-none [&>li>span]:cursor-pointer [&>li>span]:px-3 [&>li>span]:text-primary hover:[&>li>span]:underline"
        >
          <template v-for="con in contents" :key="con.label">
            <li>
              <span @click="scrollTo(con.el)">{{ con.label }}</span>
            </li>
          </template>
        </ul>
      </div>
    </slot>
    <div class="grid gap-5">
      <div v-if="!!properties" ref="propsCard">
        <InfoCard
          label="PROPS"
          :info="properties"
          class="max-h-screen-65 w-[calc(100dvw_-_4rem)] max-w-3xl bg-opacity-25 md:w-[calc(100dvw_-_20.5rem)]"
        />
      </div>
      <div v-if="events" ref="eventsCard">
        <InfoCard
          label="EVENTS"
          :info="events"
          class="max-h-screen-65 w-[calc(100dvw_-_4rem)] max-w-3xl bg-opacity-25 md:w-[calc(100dvw_-_20.5rem)]"
        />
      </div>
      <div v-if="slots" ref="slotsCard">
        <InfoCard
          label="SLOTS"
          :info="slots"
          class="max-h-screen-65 w-[calc(100dvw_-_4rem)] max-w-3xl bg-opacity-25 md:w-[calc(100dvw_-_20.5rem)]"
        />
      </div>
      <slot> </slot>
    </div>
    <div class="h-32"></div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

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
    });
  }
  if (!!eventsCard.value) {
    _conts.push({
      label: "Events",
      el: eventsCard.value,
    });
  }
  if (!!slotsCard.value) {
    _conts.push({
      label: "Slots",
      el: slotsCard.value,
    });
  }

  _conts = [..._conts, ...props.dir];

  return _conts;
});

const scrollTo = (el) => {
  let y = el.getBoundingClientRect().top - ($screen.md.value ? 60 : 120);
  document.body.scrollTo({ top: y, behavior: "smooth" });
};
</script>
