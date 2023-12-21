<template>
  <TCard class="relative max-w-screen-95 border-4">
    <TCardHeader class="bg-opacity-50">
      <TCardTitle class="!text-2xl !font-bold"> {{ label }} </TCardTitle>
      <TInput
        v-model="search"
        label="Search"
        innerClass="border-none shadow-none !outline-none"
        clearable
      >
        <template #prepend>
          <TIcon name="search" />
        </template>
        <template #append>
          <TButton
            v-if="!!search"
            icon="close"
            iconSize="sm"
            class="rounded-full p-0.5"
            @click="search = ''"
          />
        </template>
      </TInput>
    </TCardHeader>
    <TCardBody class="divide-y divide-foreground/25 overflow-auto !p-0">
      <template v-if="filtered.length <= 0">
        <div class="text-center text-sm font-semibold italic text-gray-400">
          No result!
        </div>
      </template>
      <template v-for="inf in filtered" :key="inf">
        <InfoBlock
          :name="inf.name"
          :type="inf.type"
          :description="inf.description"
          :defaultVal="inf.default"
          :examples="inf.examples ?? []"
          :params="inf.params ?? []"
          :scopes="inf.scopes ?? []"
        />
      </template>
    </TCardBody>
    <TInnerLoading :active="false" />
  </TCard>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from "vue";

const InfoBlock = defineAsyncComponent(() => import("./infoBlock.vue"));

const props = defineProps({
  label: String,
  info: Object,
});

const search = ref("");

const filtered = computed(() =>
  search.value == ""
    ? props.info
    : props.info.filter((item) => item.name.includes(search.value))
);
</script>
