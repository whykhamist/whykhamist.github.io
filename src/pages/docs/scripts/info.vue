<template>
  <PageBlock title="Scripts">
    <p>
      These scripts contains helper classes to aid with your development. Most
      of these were written in a rush so most may or will contain bugs which
      will be patched once found.
    </p>
    <div class="rounded-lg border border-warning bg-warning/10 px-3 py-1">
      Plans to convert these scripts to composables are in place but won't be
      written any time soon. This documentation will be updated as soon as a
      convertion is completed.
    </div>
    <div>
      <div class="text-2xl font-semibold">Available Scripts/Classes</div>
      <ul
        class="font-semibold *:px-3 *:py-1 [&>li>a]:text-primary [&>li>a]:text-opacity-75 hover:[&>li>a]:text-opacity-100 hover:[&>li>a]:underline"
      >
        <li>
          <router-link :to="{ name: 'inputfield' }"> InputField </router-link>
        </li>
        <li>jvalidate</li>
        <li>Uploader</li>
        <li>ErrorHandling</li>
        <li>Helpers</li>
        <li>ErrorMessages</li>
        <li>ErrorDescriptions</li>
        <li>MimeTypes</li>
        <li>Path</li>
        <li>notify</li>
      </ul>
    </div>
  </PageBlock>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const PageBlock = defineAsyncComponent(() => import("../utils/pageBlock.vue"));
</script>
