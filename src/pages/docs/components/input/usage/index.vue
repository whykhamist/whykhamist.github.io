<template>
  <div class="grid gap-5">
    <SampleBlock id="basic" label="Basic" :rawCode="BasicRaw">
      <Basic />
    </SampleBlock>

    <SampleBlock id="custom" label="Custom Input" :rawCode="CustomRaw">
      <Custom />
    </SampleBlock>

    <div id="validation" class="flex flex-col gap-5">
      <div class="text-3xl font-semibold text-primary">Input Validation</div>
      <p>
        The input component has no validation functions built into it. You will
        have to do the validation yourself and utilize the
        <span
          class="mx-1 rounded-md border border-teal-700 bg-teal-700/25 px-1 font-semibold leading-tight"
        >
          :error
        </span>
        and
        <span
          class="mx-1 rounded-md border border-teal-700 bg-teal-700/25 px-1 font-semibold leading-tight"
        >
          :errorMessage
        </span>
        props to inform your users of such errors.
      </p>
      <p>
        With this in mind, you can use what ever validation package you want or
        write your own. However, to reduce reliance on third party packages and
        save time writing your own validation class, we have written a
        <router-link
          :to="{ name: 'inputfield' }"
          class="border-b-2 border-dashed border-foreground/25 font-semibold text-primary/75 hover:border-solid hover:border-primary hover:text-primary"
          >simple script</router-link
        >
        that you can use to handle simple validations.
      </p>
    </div>
    <SampleBlock label="Input Validation" :rawCode="ValidationRaw">
      <Validation />
    </SampleBlock>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";

const SampleBlock = defineAsyncComponent(() =>
  import("../../../utils/sampleBlock.vue")
);

const Basic = defineAsyncComponent(() => import("./basic.vue"));
const Custom = defineAsyncComponent(() => import("./custom.vue"));
const Validation = defineAsyncComponent(() => import("./validation.vue"));

const emit = defineEmits(["load"]);

const BasicRaw = ref("");
const CustomRaw = ref("");
const ValidationRaw = ref("");

const readRawFile = async () => {
  await Promise.all([
    import("./basic.vue?raw").then((data) => {
      BasicRaw.value = data.default;
    }),

    import("./custom.vue?raw").then((data) => {
      CustomRaw.value = data.default;
    }),

    import("./validation.vue?raw").then((data) => {
      ValidationRaw.value = data.default;
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
        label: "Custom Input",
        name: "custom",
      },
      {
        label: "Input Validation",
        name: "validation",
      },
    ],
  });
});
</script>
