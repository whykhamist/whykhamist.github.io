<template>
  <Header
    class="z-50 flex border-b !border-foreground/25 bg-background bg-opacity-75 p-0 py-1 text-foreground shadow-md backdrop-blur-sm transition-colors duration-1000"
    :class="[systemStore.settings.navbar.fixed && 'fixed left-0 top-0 z-10']"
    :style="{ right: `${layoutWidthNoScroll}px` }"
  >
    <SizeObserver @resize="onHeaderResize" />
    <div
      class="flex min-h-full min-w-full flex-col gap-1 px-4 sm:flex-row md:items-center"
    >
      <div class="flex flex-auto items-center">
        <slot name="prepend"></slot>
        <router-link
          :to="{ name: 'HomePage' }"
          class="inline-flex items-center"
        >
          <TImage
            src="/favicons/baguioseal.svg"
            class="aspect-square w-12 rounded-full border-light"
          />
          <span
            class="flex items-center justify-center p-2 text-lg font-semibold md:text-2xl"
          >
            {{ $system.product_name }}
          </span>
        </router-link>
      </div>
      <nav class="flex h-full items-center justify-center md:justify-end">
        <ul class="flex h-full items-center gap-1 [&>li]:h-full">
          <li>
            <ThemeToggle
              :label="$md ? 'Theme' : null"
              class="h-10 rounded-lg px-3"
            />
          </li>
          <li v-if="!!systemStore.pin">
            <TButton
              icon="lock"
              :label="$md ? 'Lock Screen' : null"
              class="my-1 h-10 rounded-lg px-3"
              @click="systemStore.lock()"
            />
          </li>
          <li>
            <TButton
              :icon="
                systemStore.settings.navbar.fixed ? 'toggle_on' : 'toggle_off'
              "
              :label="$md ? 'Fixed Nav' : null"
              class="my-1 h-10 rounded-lg px-3"
              @click="systemStore.toggleFixedNavbar()"
            />
          </li>
        </ul>
      </nav>
    </div>
  </Header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, inject } from "vue";
import { useSystemStore } from "@/stores";
import { useRoute } from "vue-router";

const systemStore = useSystemStore();
const route = useRoute();

const $screen = inject("$screen");
const $md = $screen.value.greaterOrEqual("md");

const props = defineProps({
  layoutRef: Object,
});

const emit = defineEmits(["resize"]);

const layoutWidthNoScroll = ref(0);
const headerSize = ref({
  width: 0,
  height: 0,
});
const scrollOffset = ref(0);

const onHeaderResize = (size) => {
  headerSize.value = size;

  let body = document.getElementsByTagName("body")[0];
  let layout = props.layoutRef?.$el ?? null;

  layoutWidthNoScroll.value = body.offsetWidth - (layout?.offsetWidth ?? 0);

  emit("resize", size);
};

const onBodyScroll = (e) => {
  scrollOffset.value = e.target.scrollTop;
};

onMounted(() => {
  document.body.addEventListener("scroll", onBodyScroll);
});
onBeforeUnmount(() => {
  document.body.removeEventListener("scroll", onBodyScroll);
});
</script>
