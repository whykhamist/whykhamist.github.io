<template>
  <div>
    <ActionButton
      v-if="!!label"
      :label="label"
      v-bind="icons"
      :class="{ ..._btnClass, 'router-link-active': open }"
      @click="open = !open"
    />
    <TCollapse :modelValue="!label || (!!label && open)" class="!duration-75">
      <div
        class="grid gap-1 border-l border-primary py-1 pl-3"
        :class="{
          'ml-6': !!icons.icon,
          'ml-3': !icons.icon,
        }"
      >
        <template v-for="sub in menu.sub" :key="sub">
          <ActionButton
            v-if="!!sub.to"
            :label="sub.label"
            :to="sub.to"
            :icon="sub.icon"
          />
          <ActionButton
            v-else-if="!!sub.action"
            :label="sub.label"
            :icon="sub.icon"
            @click="sub.action"
          />
          <Grouped v-else-if="!!sub.sub" :label="sub.label" :menu="sub" />
        </template>
      </div>
    </TCollapse>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref, useSlots } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const ActionButton = defineAsyncComponent(() => import("./actionButton.vue"));
const Grouped = defineAsyncComponent(() => import("./grouped.vue"));
const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  menu: Object,
  collapsible: {
    type: Boolean,
    default: true,
  },
  openIcon: {
    type: String,
    default: "add",
  },
  closeIcon: {
    type: String,
    default: "remove",
  },
  iconType: {
    type: String,
    default: "outlined",
  },
  rightIcon: {
    type: Boolean,
    default: false,
  },
  btnClass: {
    type: [Object, String],
    default: "",
  },
  noOpener: {
    type: Boolean,
    default: false,
  },
});
const open = ref(false);

const icons = computed(() => {
  let _icons = {
    icon: open.value ? props.closeIcon : props.openIcon,
    type: props.iconType,
    class: { transition: true, "rotate-180": open.value },
  };
  return props.rightIcon
    ? {
        rightIcon: _icons.icon,
        rightIconType: _icons.type,
        rightIconClass: _icons.class,
      }
    : {
        icon: _icons.icon,
        iconType: _icons.type,
        iconClass: _icons.class,
      };
});

const _btnClass = computed(() =>
  Array.isArray(props.btnClass) ? props.btnClass : [props.btnClass]
);

const checkActive = () => {
  if (!!props.menu && !!props.menu.sub) {
    let result = checkActiveSub(props.menu.sub);
    open.value = result;
  }
};

const checkActiveSub = (sub) => {
  return sub.some(
    (v) => v.to?.name == route.name || (!!v.sub && checkActiveSub(v.sub))
  );
};

onMounted(() => {
  checkActive();
});
</script>
