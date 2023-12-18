<template>
  <TButton class="w-full rounded-lg border border-transparent px-3 py-1">
    <div class="pointer-events-none flex items-center gap-1">
      <TIcon v-if="!!icon" :name="icon" :type="iconType" :class="_iconClass" />
      <div class="flex-auto text-start font-semibold">
        {{ label }}
      </div>
      <TIcon
        v-if="!!rightIcon"
        :name="rightIcon"
        :type="rightIconType"
        :class="_rightIconClass"
      />
    </div>
  </TButton>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  label: String,
  icon: {
    type: String,
    default: null,
  },
  iconType: {
    type: String,
    default: "outlined",
  },
  iconClass: {
    type: [Object, String],
    default: "",
  },
  rightIcon: {
    type: String,
    default: null,
  },
  rightIconType: {
    type: String,
    default: "outlined",
  },
  rightIconClass: {
    type: [Object, String],
    default: "",
  },
});

const _iconClass = computed(() =>
  Array.isArray(props.iconClass) ? props.iconClass : [props.iconClass]
);

const _rightIconClass = computed(() =>
  Array.isArray(props.rightIconClass)
    ? props.rightIconClass
    : [props.rightIconClass]
);
</script>
