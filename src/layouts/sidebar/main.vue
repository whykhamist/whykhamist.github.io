<template>
  <SideBar
    :menuClass="{
      'transition-all duration-500': true,
      '!px-1 !py-1': collapsed && !fixed,
    }"
    :contentClass="{
      ..._contentClass,
      'transition-all duration-500': true,
      '!w-[3.25rem]': collapsible && collapsed && !fixed,
      '!w-80': !collapsed || fixed,
    }"
    :wrapperClass="{
      ..._wrapperClass,
    }"
    :fixed="fixed"
    @transitionEnd="onTransitionEnd"
  >
    <template #before="{ close }">
      <div
        class="relative flex items-center justify-center py-5 transition-all"
        :class="{ 'pb-10': collapsed && !fixed }"
      >
        <Avatar
          v-if="!!logo"
          :src="logo"
          :class="{ 'w-12': collapsed && !fixed, 'w-24': !collapsed || fixed }"
        />
        <span
          class="absolute transition-all duration-500"
          :class="{
            'right-[calc(100%_-_0.5rem)] top-[calc(100%_-_1rem)] -translate-y-1/2 translate-x-full':
              collapsed,
            'right-2 top-2': !collapsed,
          }"
        >
          <TButton
            v-if="!fixed && collapsible"
            icon="keyboard_double_arrow_right"
            class="rounded-md p-1"
            :iconClass="{ transition: true, ' rotate-180': !collapsed }"
            @click="collapsed = !collapsed"
          />
          <TButton
            v-else-if="fixed"
            icon="close"
            class="rounded-full p-1"
            @click="close()"
          />
        </span>
      </div>
    </template>
    <template v-for="m in menu" :key="m">
      <template v-if="!m.hidden">
        <div
          class="min-h-[1.25rem] whitespace-nowrap text-sm font-bold uppercase text-gray-400 transition-opacity duration-500"
          :class="{ 'opacity-0': collapsed }"
        >
          {{ !transitioning && collapsed ? "" : m.title }}
        </div>
        <template v-for="link in m.links" :key="link">
          <ActionButton
            v-if="!!link.to"
            :label="!transitioning && collapsed ? null : link.label"
            :tooltip="!collapsed ? null : link.label"
            :to="link.to"
            :icon="link.icon"
            class="transition-all"
            :class="{ '!px-2': collapsed }"
            :labelClass="{
              'transition-all duration-300': true,
              'opacity-0': collapsed,
            }"
          />
          <ActionButton
            v-else-if="!!link.action"
            :label="!transitioning && collapsed ? null : link.label"
            :tooltip="!collapsed ? null : link.label"
            :icon="link.icon"
            @click="link.action"
            class="transition-all"
            :class="{ '!px-2': collapsed }"
            :labelClass="{
              'transition-all duration-300': true,
              'opacity-0': collapsed,
            }"
          />
          <template v-else-if="!!link.sub">
            <GroupedPopover
              v-if="!transitioning && collapsed"
              :label="link.label"
              :tooltip="link.label"
              :menu="link"
              :icon="link.icon"
              :btnClass="{
                'transition-all': true,
                '!px-2': collapsed,
              }"
            />
            <Grouped
              v-else
              :open="transitioning ? false : null"
              :label="!transitioning && collapsed ? null : link.label"
              :tooltip="!collapsed ? null : link.label"
              :menu="link"
              :icon="link.icon"
              :labelClass="{
                'transition-all duration-300': true,
                'opacity-0': collapsed,
              }"
              :btnClass="{
                'transition-all': true,
                '!px-2': collapsed,
              }"
              :openIcon="transitioning ? link.icon : 'add'"
              :rightIcon="!transitioning"
            />
          </template>
        </template>
      </template>
    </template>
    <template #after>
      <div
        class="grid py-2 transition-all duration-300"
        :class="{ 'px-1': collapsed, 'px-3': !collapsed }"
      ></div>
    </template>
  </SideBar>
</template>

<script setup>
import { computed, defineAsyncComponent, ref, watch } from "vue";
import { Helpers } from "@/scripts";

const SideBar = defineAsyncComponent(() => import("./index.vue"));
const Grouped = defineAsyncComponent(() => import("./grouped.vue"));
const Avatar = defineAsyncComponent(() => import("./avatar.vue"));
const GroupedPopover = defineAsyncComponent(() =>
  import("./groupedPopover.vue")
);
const ActionButton = defineAsyncComponent(() => import("./actionButton.vue"));
const props = defineProps({
  menu: Object,
  afterMenu: {
    type: Object,
    default: null,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: [Object, String],
    default: () => [],
  },
  contentClass: {
    type: [Object, String],
    default: () => [],
  },
  logo: {
    type: String,
    default: null,
  },
  collapsible: {
    type: Boolean,
    default: false,
  },
});

const collapsed = ref(false);
const transitioning = ref(false);

const _wrapperClass = computed(() =>
  Helpers.classFormatter(props.wrapperClass)
);

const _contentClass = computed(() =>
  Helpers.classFormatter(props.contentClass)
);

const onTransitionEnd = (e) => {
  if (e.propertyName == "width") {
    transitioning.value = false;
  }
};

watch(
  () => props.fixed,
  (val) => {
    if (val) {
      collapsed.value = false;
    }
  }
);

watch(
  () => props.collapsible,
  (val) => {
    if (!val) {
      collapsed.value = false;
    }
  }
);

watch(collapsed, (val) => {
  transitioning.value = true;
});
</script>

<style scoped lang="scss">
.router-link-active,
:deep(.router-link-active) {
  @apply text-primary;
}
.router-link-exact-active,
:deep(.router-link-exact-active) {
  @apply border-primary/25 bg-primary/10;
}
</style>
