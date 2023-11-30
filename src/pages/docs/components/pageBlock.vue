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
        <TCard class="max-h-screen-65 max-w-3xl !rounded-md bg-foreground/5">
          <TCardHeader class="bg-opacity-50">
            <TCardTitle class="!text-2xl !font-bold"> PROPS </TCardTitle>
          </TCardHeader>
          <TCardBody class="divide-y divide-foreground/25 !p-0">
            <template v-for="prop in properties" :key="prop">
              <InfoBlock
                :name="prop.name"
                :type="prop.type"
                :description="prop.description"
                :defaultVal="prop.default"
                :examples="prop.examples ?? []"
                :params="prop.params ?? []"
              />
            </template>
          </TCardBody>
          <TCardFooter class="!min-h-[1rem] bg-opacity-50"> </TCardFooter>
        </TCard>
      </div>
      <div v-if="events" ref="eventsCard">
        <TCard class="max-h-screen-65 max-w-3xl !rounded-md bg-foreground/5">
          <TCardHeader class="bg-opacity-50">
            <TCardTitle class="!text-2xl !font-bold"> EVENTS </TCardTitle>
          </TCardHeader>
          <TCardBody class="divide-y divide-foreground/25 !p-0">
            <template v-for="evt in events" :key="evt">
              <InfoBlock
                :name="evt.name"
                :type="evt.type"
                :description="evt.description"
                :defaultVal="evt.default"
                :examples="evt.examples ?? []"
                :params="evt.params ?? []"
              />
            </template>
          </TCardBody>
          <TCardFooter class="!min-h-[1rem] bg-opacity-50"> </TCardFooter>
        </TCard>
      </div>
      <slot> </slot>
    </div>
    <div class="h-32"></div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const InfoBlock = defineAsyncComponent(() => import("./infoBlock.vue"));

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
});

const propsCard = ref(null);
const eventsCard = ref(null);

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

  _conts = [..._conts, ...props.dir];

  return _conts;
});

const scrollTo = (el) => {
  let y = el.getBoundingClientRect().top - ($screen.md.value ? 60 : 120);
  document.body.scrollTo({ top: y, behavior: "smooth" });
};
</script>
