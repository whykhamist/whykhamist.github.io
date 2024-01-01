<template>
  <div class="flex flex-col gap-5">
    <SampleBlock id="glossy" label="Glossy" :rawCode="rawGlossy">
      <Glossy />
    </SampleBlock>

    <SampleBlock id="neon" label="Neon" :rawCode="rawNeon">
      <Neon />
    </SampleBlock>

    <SampleBlock id="icons" label="Icons" :rawCode="rawIcon">
      <Icons />
    </SampleBlock>

    <SampleBlock id="icon_size" label="Icon Size" :rawCode="rawIconSize">
      <IconSize />
    </SampleBlock>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, onMounted } from "vue";

const SampleBlock = defineAsyncComponent(() =>
  import("../../../utils/sampleBlock.vue")
);

const Glossy = defineAsyncComponent(() => import("./glossy.vue"));
const Neon = defineAsyncComponent(() => import("./neon.vue"));
const Icons = defineAsyncComponent(() => import("./icon.vue"));
const IconSize = defineAsyncComponent(() => import("./iconSize.vue"));

const emit = defineEmits(["load"]);

const rawGlossy = ref("");
const rawNeon = ref("");
const rawIcon = ref("");
const rawIconSize = ref("");

const readRawFile = async () => {
  return Promise.all([
    import("./glossy.vue?raw").then((data) => {
      rawGlossy.value = data.default;
    }),

    import("./neon.vue?raw").then((data) => {
      rawNeon.value = data.default;
    }),

    import("./icon.vue?raw").then((data) => {
      rawIcon.value = data.default;
    }),

    import("./iconSize.vue?raw").then((data) => {
      rawIconSize.value = data.default;
    }),
  ]);
};

onMounted(async () => {
  await readRawFile();
  emit("load", {
    dirs: [
      {
        label: "Glossy",
        name: "glossy",
      },
      {
        label: "Neon",
        name: "neon",
      },
      {
        label: "Icons",
        name: "icons",
      },
      {
        label: "Icon Size",
        name: "icon_size",
      },
    ],
  });
});
</script>
