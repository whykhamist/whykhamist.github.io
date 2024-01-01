<template>
  <LSLayout
    class="!relative"
    :style="{
      paddingTop: systemStore.settings.navbar.fixed
        ? `${headerSize.height ?? 0}px`
        : '',
    }"
    ref="mainLayout"
  >
    <TopNav :layoutRef="mainLayout" @resize="(size) => (headerSize = size)">
      <template #prepend>
        <TButton
          v-if="!$xl"
          icon="menu"
          class="aspect-square w-10 rounded-full"
          @click="sideBar.show = true"
        />
      </template>
      <template #append>
        <TButton
          v-if="!$lg"
          icon="folder"
          class="aspect-square w-10 rounded-full"
          @click="rtlSideBar.show = true"
        />
      </template>
    </TopNav>
    <PageContainer
      class="mx-auto w-full !max-w-[2500px] justify-center"
      style=""
    >
      <SideBar
        :headerSize="headerSize"
        contentClass="border-r border-foreground/25"
        :fixed="!$xl"
        :show="sideBar.show"
        :menu="menu"
        @close="sideBar.show = false"
      />

      <router-view v-slot="{ Component }">
        <transition
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
          enter-active-class="transition duration-300 delay-300"
          leave-active-class="transition duration-300"
        >
          <component :is="Component" class="w-full xl:max-w-7xl"> </component>
        </transition>
      </router-view>

      <RtlSideBar
        :headerSize="headerSize"
        wrapperClass="border-r border-foreground/25"
        contentClass="w-80"
        :fixed="!$lg"
        :show="rtlSideBar.show"
        rtl
        @close="rtlSideBar.show = false"
      />
    </PageContainer>
    <UpScroll />
    <Footer
      class="flex h-32 items-end justify-end border-t border-foreground/25 bg-gray-300 dark:bg-gray-700"
    >
      <div class="px-5 py-2 text-sm text-gray-400">
        <b>Prepared By:</b> Jhyden Jhoe Marx M. Ellana
      </div>
    </Footer>
  </LSLayout>
</template>

<script setup>
import {
  computed,
  defineAsyncComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { useSystemStore } from "@/stores";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useRoute } from "vue-router";

const route = useRoute();
const LSLayout = defineAsyncComponent(() => import("./lockScreenLayout.vue"));
const TopNav = defineAsyncComponent(() => import("./topNav.vue"));
const SideBar = defineAsyncComponent(() => import("./sidebar/main.vue"));
const RtlSideBar = defineAsyncComponent(() => import("./sidebar/rMain.vue"));
const UpScroll = defineAsyncComponent(() => import("./upScroll.vue"));

const systemStore = useSystemStore();

const $screen = useBreakpoints(breakpointsTailwind);
const $lg = $screen.greaterOrEqual("lg");
const $xl = $screen.greaterOrEqual("xl");

const mainLayout = ref(null);
const headerSize = ref({});
const sideBar = ref({
  show: false,
});
const rtlSideBar = ref({
  show: false,
});
const menu = ref([
  {
    title: "Main Navigation",
    hidden: false,
    links: [
      {
        label: "Installed Packages",
        to: { name: "packages" },
      },
      {
        label: "Components",
        sub: [
          {
            label: "Button",
            to: { name: "button" },
          },
          {
            label: "Collapse",
            to: { name: "collapse" },
          },
          {
            label: "Dialog (modal)",
            to: { name: "dialog" },
          },
          {
            label: "Forms",
            sub: [
              {
                label: "Field Wrapper",
                to: { name: "fieldwrapper" },
              },
              {
                label: "Input",
                to: { name: "input" },
              },
            ],
          },
          {
            label: "Icons",
            to: { name: "icon" },
          },
          {
            label: "Size Observer",
            to: { name: "sizeobserver" },
          },
        ],
      },
      {
        label: "Scripts",
        to: { name: "scripts" },
        sub: [
          {
            label: "Input Field",
            to: { name: "inputfield" },
          },
        ],
      },
    ],
  },
  {
    title: "Others",
    hidden: false,
    links: [
      {
        label: "Unauthorized",
        to: { name: "401" },
        icon: null,
      },
    ],
  },
]);

const suTarget = computed(() => document);

watch($xl, () => {
  sideBar.value.show = false;
});

watch($lg, () => {
  rtlSideBar.value.show = false;
});

watch(route, (val) => {
  sideBar.value.show = false;
  rtlSideBar.value.show = false;
});
</script>
