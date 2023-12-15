<template>
  <div class="flex flex-col gap-5">
    <SampleBlock label="Basic" :rawCode="BasicRaw">
      <Basic />
    </SampleBlock>

    <SampleBlock label="Accordion" :rawCode="AccordionRaw">
      <Accordion />
    </SampleBlock>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref } from "vue";

const SampleBlock = defineAsyncComponent(() =>
  import("../../utils/sampleBlock.vue")
);

const Basic = defineAsyncComponent(() => import("./samples/basic.vue"));
const Accordion = defineAsyncComponent(() => import("./samples/accordion.vue"));

const AccordionRaw = ref("");
const BasicRaw = ref("");

const readRawFile = () => {
  import("./samples/accordion.vue?raw").then((data) => {
    AccordionRaw.value = data.default;
  });
  import("./samples/basic.vue?raw").then((data) => {
    BasicRaw.value = data.default;
  });
};
onMounted(() => {
  readRawFile();
});
</script>
