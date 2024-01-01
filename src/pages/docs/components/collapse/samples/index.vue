<template>
  <div class="flex flex-col gap-5">
    <SampleBlock id="basic" label="Basic" :rawCode="BasicRaw">
      <Basic />
    </SampleBlock>

    <SampleBlock id="accordion" label="Accordion" :rawCode="AccordionRaw">
      <Accordion />
    </SampleBlock>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref } from "vue";

const SampleBlock = defineAsyncComponent(() =>
  import("../../../utils/sampleBlock.vue")
);

const Basic = defineAsyncComponent(() => import("./basic.vue"));
const Accordion = defineAsyncComponent(() => import("./accordion.vue"));

const emit = defineEmits(["load"]);

const AccordionRaw = ref("");
const BasicRaw = ref("");

const readRawFile = async () => {
  await Promise.all([
    import("./accordion.vue?raw").then((data) => {
      AccordionRaw.value = data.default;
    }),
    import("./basic.vue?raw").then((data) => {
      BasicRaw.value = data.default;
    }),
  ]);

  emit("load", {
    dirs: [
      {
        label: "Basic",
        name: "basic",
      },
      {
        label: "Accordion",
        name: "accordion",
      },
    ],
  });
};
onMounted(async () => {
  await readRawFile();
});
</script>
