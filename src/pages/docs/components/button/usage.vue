<template>
  <div class="flex flex-col gap-5">
    <SampleBlock label="Glossy" :rawCode="rawGlossy">
      <Glossy />
    </SampleBlock>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, onMounted } from "vue";

const SampleBlock = defineAsyncComponent(() =>
  import("../../utils/sampleBlock.vue")
);

const Glossy = defineAsyncComponent(() => import("./samples/glossy.vue"));

const rawGlossy = ref("");
const readRawFile = () => {
  import("./samples/glossy.vue?raw").then((data) => {
    rawGlossy.value = data.default;
  });
};

onMounted(() => {
  readRawFile();
});
</script>
