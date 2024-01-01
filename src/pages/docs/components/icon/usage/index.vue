<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col items-stretch justify-end gap-1 px-3 py-1">
      <div class="">
        For more advanced search, please refer to Google's
        <a
          href="https://fonts.google.com/icons?icon.style=Outlined&icon.set=Material+Icons"
          class="text-primary"
          target="_blank"
        >
          Material Icons
        </a>
      </div>
      <TInput
        v-model="query"
        @update:modelValue="onQueryUpdate"
        label="Search"
        class="flex-auto"
      >
        <template v-if="!!query" #append>
          <TButton
            icon="close"
            iconSize="sm"
            @click="(query = ''), filter()"
            class="rounded-full"
          />
        </template>
      </TInput>
      <div class="flex flex-auto flex-wrap items-center gap-1">
        <template v-for="t in types" :key="t">
          <TButton
            :label="t"
            class="rounded-md px-3 text-sm"
            :class="{ 'text-primary': type == t }"
            @click="type = t"
          />
        </template>
      </div>
    </div>
    <div
      class="relative overflow-hidden rounded-lg border border-foreground/25"
    >
      <RecycleScroller
        :items="filtered"
        :itemSize="128"
        :itemSecondarySize="112"
        :gridItems="gridItems"
        class="h-screen-70 overflow-y-auto px-3 py-2"
      >
        <template #before>
          <SizeObserver @resize="onResize" />
          <div
            v-if="loading"
            class="flex w-full items-center justify-center text-sm font-semibold italic text-gray-400"
          >
            Searching...
          </div>
          <div
            v-else-if="filtered.length <= 0"
            class="flex w-full items-center justify-center text-sm font-semibold italic text-gray-400"
          >
            No icons found!
          </div>
        </template>
        <template #default="{ item, index }">
          <TButton
            class="h-32 w-28 rounded-lg border"
            :class="{
              'border-primary bg-primary/5 text-primary':
                preview.selected == item,
              'border-transparent': preview.selected != item,
            }"
            :key="`${item}_${index}`"
            @click="openPreview(item)"
          >
            <div
              class="pointer-events-none flex flex-col items-center justify-center gap-5"
            >
              <TIcon :name="`${item}`" size="xl" :type="type" />
              <span class="px-2 text-xs font-semibold">
                {{ nameFormat(item) }}
              </span>
            </div>
          </TButton>
        </template>
      </RecycleScroller>
      <TDialog
        v-model="preview.show"
        contain
        position="right"
        transition="slide-left"
        full-height
        seamless
        v-slot="{ close }"
      >
        <IconPreview
          :name="preview.selected"
          v-model:type="type"
          class="h-full w-screen-95 max-w-xs"
          @close="close(), (preview.selected = null)"
        />
      </TDialog>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref } from "vue";
import icons from "material-icons/_data/versions.json";

const IconPreview = defineAsyncComponent(() => import("./preview.vue"));

const query = ref("");
const selected = ref(null);
const type = ref("outlined");
const gridItems = ref(7);
const timer = ref(null);
const loading = ref(false);
const containerSize = ref({});
const preview = ref({
  show: false,
  selected: null,
});

const types = ref(["filled", "outlined", "round", "sharp", "two-tone"]);

const filtered = ref([]);

const nameFormat = (name) => {
  return name.replaceAll("_", " ");
};

const onQueryUpdate = (e) => {
  clearInterval(timer.value);
  filtered.value = [];
  loading.value = true;
  timer.value = setInterval(async () => {
    clearInterval(timer.value);
    filter(e);
    loading.value = false;
  }, 250);
};

const filter = (q = "") => {
  filtered.value =
    q == ""
      ? Object.keys(icons)
      : Object.keys(icons).filter((v) => v.includes(query.value));
};

const onResize = (e) => {
  containerSize.value = e;
  gridItems.value = Math.ceil(e.width / 128);
};

const openPreview = (name) => {
  preview.value.selected = name;
  preview.value.show = true;
};

onMounted(() => {
  filter();
});
</script>
