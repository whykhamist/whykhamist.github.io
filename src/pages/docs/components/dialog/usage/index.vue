<template>
  <div class="grid gap-5">
    <SampleBlock id="basic" label="Basic" :rawCode="BasicRaw">
      <Basic />
    </SampleBlock>

    <SampleBlock id="contained" label="Contained" :rawCode="ContainedRaw">
      <Contained />
    </SampleBlock>

    <SampleBlock id="persistent" label="Persistent" :rawCode="PersistentRaw">
      <Persistent />
    </SampleBlock>

    <SampleBlock
      id="positions"
      label="Positions and Transitions"
      :rawCode="PositionRaw"
    >
      <Position />
    </SampleBlock>

    <SampleBlock id="seamless" label="Seamless" :rawCode="SeamlessRaw">
      <Seamless />
    </SampleBlock>

    <SampleBlock
      id="maximized"
      label="Maximize Dimensions"
      :rawCode="MaximizedRaw"
    >
      <Maximized />
    </SampleBlock>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";

const SampleBlock = defineAsyncComponent(() =>
  import("../../../utils/sampleBlock.vue")
);

const Basic = defineAsyncComponent(() => import("./basic.vue"));
const Contained = defineAsyncComponent(() => import("./contained.vue"));
const Persistent = defineAsyncComponent(() => import("./persistent.vue"));
const Position = defineAsyncComponent(() => import("./position.vue"));
const Maximized = defineAsyncComponent(() => import("./maximized.vue"));
const Seamless = defineAsyncComponent(() => import("./seamless.vue"));

const emit = defineEmits(["load"]);

const BasicRaw = ref("");
const ContainedRaw = ref("");
const PersistentRaw = ref("");
const PositionRaw = ref("");
const MaximizedRaw = ref("");
const SeamlessRaw = ref("");

const readRawFile = async () => {
  await Promise.all([
    import("./basic.vue?raw").then((data) => {
      BasicRaw.value = data.default;
    }),

    import("./contained.vue?raw").then((data) => {
      ContainedRaw.value = data.default;
    }),

    import("./persistent.vue?raw").then((data) => {
      PersistentRaw.value = data.default;
    }),

    import("./position.vue?raw").then((data) => {
      PositionRaw.value = data.default;
    }),

    import("./maximized.vue?raw").then((data) => {
      MaximizedRaw.value = data.default;
    }),

    import("./seamless.vue?raw").then((data) => {
      SeamlessRaw.value = data.default;
    }),
  ]);
};

onMounted(async () => {
  await readRawFile();
  emit("load", {
    dirs: [
      {
        label: "Basic",
        name: "basic",
      },
      {
        label: "Contained",
        name: "contained",
      },
      {
        label: "Persistent",
        name: "persistent",
      },
      {
        label: "Positions & Transitions",
        name: "positions",
      },
      {
        label: "Seamless",
        name: "seamless",
      },
      {
        label: "Maximized Dimensions",
        name: "maximized",
      },
    ],
  });
});
</script>
