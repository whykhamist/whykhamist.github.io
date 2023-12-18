<template>
  <SideBar>
    <template v-for="m in menu" :key="m">
      <template v-if="!m.hidden">
        <div class="text-sm font-bold uppercase text-gray-400">
          {{ m.title }}
        </div>
        <template v-for="link in m.links" :key="link">
          <ActionButton
            v-if="!!link.to"
            :label="link.label"
            :to="link.to"
            :icon="link.icon"
          />
          <ActionButton
            v-else-if="!!link.action"
            :label="link.label"
            :icon="link.icon"
            @click="link.action"
          />
          <Grouped
            v-else-if="!!link.sub"
            :label="link.label"
            :menu="link"
            rightIcon
          />
        </template>
      </template>
    </template>
  </SideBar>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const SideBar = defineAsyncComponent(() => import("./index.vue"));
const Grouped = defineAsyncComponent(() => import("./grouped.vue"));
const ActionButton = defineAsyncComponent(() => import("./actionButton.vue"));
const props = defineProps({
  menu: Object,
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
