<template>
  <KeepAlive exclude="lockScreen">
    <Layout v-if="!systemStore.locked" v-bind="$attrs">
      <slot />
    </Layout>
    <LockScreen v-else />
  </KeepAlive>
</template>

<script setup>
import { ref } from "vue";
import LockScreen from "./main/lockScreen.vue";
import { useSystemStore } from "@/stores";

const systemStore = useSystemStore();
</script>
