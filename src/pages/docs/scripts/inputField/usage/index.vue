<template>
  <div class="flex flex-col gap-5">
    <SampleBlock id="basic" label="Basic" :rawCode="BasicRaw" />
  </div>
</template>
<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";

const SampleBlock = defineAsyncComponent(() =>
  import("../../../utils/sampleBlock.vue")
);

const emit = defineEmits(["load"]);

const BasicRaw = ref("");

const ReadRaw = async () => {
  return await Promise.all([
    import("./basic.vue?raw").then((data) => {
      BasicRaw.value = data.default;
    }),
  ]);
};

onMounted(async () => {
  await ReadRaw();
  emit("load", {
    dirs: [
      {
        label: "Basic",
        name: "basic",
      },
    ],
  });
});
</script>
