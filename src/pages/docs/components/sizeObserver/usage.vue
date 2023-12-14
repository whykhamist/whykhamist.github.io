<template>
  <div class="flex flex-col gap-5">
    <SampleBlock label="Via Slots" :rawCode="RawCodeSlots">
      <ViaSlots />
    </SampleBlock>

    <SampleBlock label="Via events" :rawCode="RawCodeEvents">
      <ViaEvents />
    </SampleBlock>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, onMounted } from "vue";

const SampleBlock = defineAsyncComponent(() =>
  import("../../utils/sampleBlock.vue")
);
const ViaSlots = defineAsyncComponent(() => import("./sample/viaSlots.vue"));
const ViaEvents = defineAsyncComponent(() => import("./sample/viaEvents.vue"));

const RawCodeSlots = ref("");
const RawCodeEvents = ref("");

const readRawFile = () => {
  import("./sample/viaSlots.vue?raw").then((data) => {
    RawCodeSlots.value = data.default;
  });
  import("./sample/viaEvents.vue?raw").then((data) => {
    RawCodeEvents.value = data.default;
  });
};

onMounted(() => {
  readRawFile();
});
</script>
