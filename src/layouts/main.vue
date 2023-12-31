<template>
  <LSLayout
    class="!relative"
    :style="{
      paddingTop: systemStore.settings.navbar.fixed
        ? `${headerSize.height}px`
        : '',
    }"
    ref="mainLayout"
  >
    <TopNav :layoutRef="mainLayout" @resize="(size) => (headerSize = size)">
      <template #prepend>
        <TButton
          v-if="!$md"
          icon="menu"
          class="my-1 aspect-square w-10 rounded-full leading-none hover:bg-foreground/25"
          @click="_showMenu = true"
        />
      </template>
    </TopNav>
    <PageContainer>
      <MainSideBar
        v-if="!isScreenSmaller"
        v-model:menu="menu"
        :collapsed="false"
        hideCollapse
        class="fixed bottom-16 top-16"
        :style="sidebarStyle"
        @expandStart="onExpand(true)"
        @expandEnd="onExpand(false)"
      />
      <Layout
        class="duration-75"
        :class="[
          ...pageBounds,
          !isScreenSmaller && sideCollapsed && 'ml-14 ',
          !isScreenSmaller && !sideCollapsed && 'ml-[16.5rem]',
        ]"
      >
        <PageContainer :class="pageBounds">
          <router-view v-slot="{ Component }">
            <transition
              enter-from-class="opacity-0"
              leave-to-class="opacity-0"
              enter-active-class="transition duration-300 delay-300"
              leave-active-class="transition duration-300"
            >
              <component :is="Component" :class="pageBounds"> </component>
            </transition>
          </router-view>
        </PageContainer>
        <MinFooter v-if="false" />
      </Layout>
    </PageContainer>
    <TScrollUp
      class="bottom-5 right-8 z-50 rounded-2xl bg-gray-900/75 px-5 py-2 text-gray-100 shadow-md dark:bg-gray-500/75"
    >
      <TIcon name="keyboard_double_arrow_up" size="sm" />
    </TScrollUp>
    <TDialog
      v-if="isScreenSmaller"
      v-model="_showMenu"
      position="left"
      full-height
      transition="slide-right"
      wrapperClass="py-2"
    >
      <MainSideBar
        v-model:menu="menu"
        @redirect="_showMenu = false"
        :collapsed="false"
        hideCollapse
        class="h-full rounded-lg"
      />
    </TDialog>
  </LSLayout>
</template>

<script setup>
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSystemStore } from "@/stores";
import permissions from "@/scripts/json/routePerms.json";
import LSLayout from "./lockScreenLayout.vue";
import MainSideBar from "./main/mainSideBar.vue";
import MinFooter from "./footer/min.vue";
import TopNav from "./topNav.vue";

const $screen = inject("$screen");
const $router = useRouter();
const systemStore = useSystemStore();
const menu = reactive([
  {
    title: "Main Navigation",
    hidden: false,
    links: [
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
            label: "Icons",
            to: { name: "icon" },
          },
          {
            label: "Field Wrapper",
            to: { name: "fieldwrapper" },
          },
          {
            label: "Input",
            to: { name: "input" },
          },
          {
            label: "Size Observer",
            to: { name: "sizeobserver" },
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

const _showMenu = ref(false);
const headerSize = ref({
  width: 0,
  height: 0,
});
const scrolledDown = ref(false);
const scrollOffset = ref(0);
const layoutWidthNoScroll = ref(0);
const expanding = ref(false);
const expandTimeout = ref(null);

const mainLayout = ref(null);

const isScreenSmaller = $screen.value.smaller("md");
const $md = $screen.value.greaterOrEqual("md");

const sideCollapsed = computed({
  get: () => systemStore.settings.sidebar.collapsed,
  set: (val) => {
    systemStore.settings.sidebar.collapsed = val;
  },
});

const sidebarStyle = computed(() => {
  return systemStore.settings.navbar.fixed
    ? {
        height: `calc(100% - ${headerSize.value.height + 24}px)`,
        top: `${headerSize.value.height + 12}px`,
      }
    : {
        height: `calc(100% - ${
          scrolledDown.value
            ? 24
            : headerSize.value.height + 24 - scrollOffset.value
        }px)`,
        top: `${
          scrolledDown.value
            ? 12
            : headerSize.value.height + 12 - scrollOffset.value
        }px`,
      };
});

const pageBounds = computed(() => [
  !isScreenSmaller.value &&
    sideCollapsed.value &&
    "!max-w-[calc(100vw_-_3.5rem)]",
  !isScreenSmaller.value &&
    !sideCollapsed.value &&
    !expanding.value &&
    "!max-w-[calc(100vw_-_16.5rem)]",
  !$md.value && "!max-w-[100vw]",
]);

const onExpand = (val) => {
  if (!!expandTimeout.value) {
    clearTimeout(expandTimeout.value);
  }
  if (val) {
    expanding.value = true;
  } else {
    expandTimeout.value = setTimeout(() => {
      expanding.value = false;
    }, 75);
  }
};

const onHeaderResize = (size) => {
  headerSize.value = size;

  let body = document.getElementsByTagName("body")[0];
  let layout = mainLayout.value?.$el ?? null;

  layoutWidthNoScroll.value = body.offsetWidth - (layout?.offsetWidth ?? 0);
};

const onBodyScroll = (e) => {
  scrollOffset.value = Math.floor(e.target.scrollTop);
  scrolledDown.value = e.target.scrollTop > 57;
};

onMounted(() => {
  document.body.addEventListener("scroll", onBodyScroll);
});
onBeforeUnmount(() => {
  document.body.removeEventListener("scroll", onBodyScroll);
});
</script>
