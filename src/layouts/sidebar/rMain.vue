<template>
  <SideBar>
    <template v-for="m in menus" :key="m">
      <ActionButton :label="m.label" @click="m.action" />
      <Grouped v-if="!!m.sub" :label="null" :menu="m"> </Grouped>
    </template>
  </SideBar>
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
import { useRouter } from "vue-router";

const router = useRouter();
const rtlSideBar = inject("rtlSideBar");
const SideBar = defineAsyncComponent(() => import("./index.vue"));
const Grouped = defineAsyncComponent(() => import("./grouped.vue"));
const ActionButton = defineAsyncComponent(() => import("./actionButton.vue"));

const props = defineProps({});

const menus = ref([]);

const mapMenu = (menu) => {
  let result = menu.map((m) => {
    let mm = {
      label: m.label,
      action: () => router.push({ hash: `#${m.name}` }),
    };
    !!m.sub && Object.assign(mm, { sub: mapMenu(m.sub) });
    return mm;
  });
  return result;
};

watch(
  rtlSideBar,
  (val) => {
    menus.value = mapMenu(val.menu);
  },
  { deep: true }
);
</script>
