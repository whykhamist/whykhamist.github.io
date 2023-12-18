<template>
  <div
    class="flex h-screen w-80 min-w-[20rem] max-w-[20rem] flex-col"
    :class="{
      'fixed inset-y-0': fixed,
      'right-0': fixed && rtl,
      'left-0': fixed && !rtl,
      'sticky ': !fixed,
    }"
    :style="{
      top: topOffset,
      maxHeight: maxHeight,
    }"
  >
    <slot name="before"></slot>
    <div class="flex-auto overflow-y-auto">
      <slot name="prepend"></slot>
      <div class="grid w-full gap-1 px-3 py-5">
        <slot />
      </div>
      <slot name="append"></slot>
    </div>
    <slot name="after"></slot>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useSystemStore } from "@/stores";

const props = defineProps({
  headerSize: {
    type: Object,
    default: null,
  },
  rtl: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
});

const systemStore = useSystemStore();

const scrollOffset = ref(0);

const rightBar = computed(() => systemStore.settings.sidebar.right);
const topOffset = computed(() => {
  let offset = systemStore.settings.navbar.fixed
    ? `${props.headerSize?.height ?? 0}px`
    : "0px";
  return !props.fixed ? offset : "";
});
const maxHeight = computed(() => {
  let leOffset = (props.headerSize?.height ?? 0) - scrollOffset.value;
  leOffset = leOffset <= 0 ? 0 : leOffset;
  let offset = systemStore.settings.navbar.fixed
    ? props.headerSize?.height ?? 0
    : leOffset;
  return !props.fixed ? `calc(100dvh - ${offset}px)` : "100dvh";
});

const onBodyScroll = (e) => {
  scrollOffset.value = Math.floor(window.scrollY);
};

onMounted(() => {
  document.addEventListener("scroll", onBodyScroll);
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", onBodyScroll);
});
</script>
