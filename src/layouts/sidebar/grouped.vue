<template>
  <div class="grid">
    <ActionButton
      v-if="!noOpener"
      :label="label"
      v-bind="icons"
      :tooltip="tooltip"
      :tooltipPosition="tooltipPosition"
      :labelClass="_labelClass"
      :class="{ ..._btnClass, 'router-link-active': _open }"
      @click="_open = !_open"
    />
    <TCollapse
      :modelValue="noOpener || (!noOpener && _open)"
      class="!duration-75"
    >
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
          <Grouped
            v-else-if="!!sub.sub"
            :icon="sub.icon"
            :label="sub.label"
            :menu="sub"
          />
        </template>
      </div>
    </TCollapse>
  </div>
</template>

<script setup>
import {
  computed,
  defineAsyncComponent,
  onMounted,
  ref,
  useSlots,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import { Helpers } from "@/scripts";

const route = useRoute();
const ActionButton = defineAsyncComponent(() => import("./actionButton.vue"));
const Grouped = defineAsyncComponent(() => import("./grouped.vue"));
const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  menu: Object,
  open: {
    type: Boolean,
    default: null,
  },
  icon: {
    type: String,
    default: null,
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
    default: () => [],
  },
  labelClass: {
    type: [Object, String],
    default: () => [],
  },
  noOpener: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
    default: null,
  },
  tooltipPosition: {
    type: String,
    default: "right",
  },
});

const emit = defineEmits(["update:open"]);

const isOpen = ref(false);

const _open = computed({
  get: () => props.open ?? isOpen.value,
  set: (val) => {
    emit("update:open", val);
    isOpen.value = val;
  },
});

const icons = computed(() => {
  let _icons = {
    icon: _open.value ? props.closeIcon : props.openIcon,
    type: props.iconType,
    class: { transition: true, "rotate-180": _open.value },
  };
  let result = props.rightIcon
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
  if (props.rightIcon && !!props.icon) {
    Object.assign(result, { icon: props.icon });
  }
  return result;
});

const _btnClass = computed(() => Helpers.classFormatter(props.btnClass));

const _labelClass = computed(() => Helpers.classFormatter(props.labelClass));

const checkActive = () => {
  if (!!props.menu && !!props.menu.sub) {
    let result = checkActiveSub(props.menu.sub);
    _open.value = result;
  }
};

const checkActiveSub = (sub) => {
  return sub.some(
    (v) => v.to?.name == route.name || (!!v.sub && checkActiveSub(v.sub))
  );
};

watch(
  () => props.open,
  (val) => {
    isOpen.value = val;
  }
);

onMounted(() => {
  checkActive();
});
</script>
