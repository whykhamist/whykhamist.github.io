<template>
  <Header
    class="z-50 grid border-b-2 border-foreground/25 bg-background p-0 text-foreground backdrop-blur-sm transition-colors duration-1000"
    :class="[systemStore.settings.navbar.fixed && 'fixed left-0 top-0 z-10']"
    :style="{ right: `${layoutWidthNoScroll}px` }"
  >
    <SizeObserver @resize="onHeaderResize" />
    <div
      class="flex flex-auto items-center border-b border-foreground/25 px-3 py-1"
    >
      <router-link
        :to="{ name: 'HomePage' }"
        class="group inline-flex items-center"
      >
        <TImage
          src="/favicons/baguioseal.svg"
          class="aspect-square w-12 rounded-full border-light transition-all duration-1000 group-hover:rotate-[720deg]"
        />
        <span
          class="flex items-center justify-center p-2 text-lg font-semibold md:text-2xl"
        >
          {{ $system.product_name }}
        </span>
      </router-link>
    </div>
    <nav class="flex h-full items-center justify-center gap-1 md:justify-end">
      <div class="flex-auto">
        <slot name="prepend"></slot>
      </div>
      <ul class="flex h-full items-center gap-1 [&>li]:h-full">
        <li>
          <TButton
            label="Components"
            class="my-1 flex h-10 items-center justify-center rounded-lg px-3"
            :to="{ name: 'components' }"
          />
        </li>
        <li>
          <ThemeToggle
            :label="$md ? 'Theme' : null"
            class="h-10 rounded-lg px-3"
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
      <slot name="append"> </slot>
    </nav>
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

  let body = document.body;
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

<style scoped>
.router-link-active {
  @apply bg-foreground/5;
}
</style>
