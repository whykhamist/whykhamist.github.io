<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col rounded-md border border-foreground">
      <TButton @click="tab = 'accord1'" class="px-3 py-1">
        <div class="pointer-events-none flex items-center text-start">
          <div class="flex-auto font-semibold uppercase">Accordion 1</div>
          <TIcon
            name="expand_more"
            class="transition-transform"
            :class="{ '-rotate-90': tab != 'accord1' }"
          />
        </div>
      </TButton>
      <TCollapse :modelValue="tab == 'accord1'">
        <div class="px-3 py-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          placeat amet minus aperiam dicta doloremque facilis quis deserunt
          recusandae perspiciatis, omnis quo voluptate laboriosam sapiente
          maiores nam vel esse explicabo?
        </div>
      </TCollapse>

      <TButton @click="tab = 'accord2'" class="px-3 py-1">
        <div class="pointer-events-none flex items-center text-start">
          <div class="flex-auto font-semibold uppercase">Accordion 2</div>
          <TIcon
            name="expand_more"
            class="transition-transform"
            :class="{ '-rotate-90': tab != 'accord2' }"
          />
        </div>
      </TButton>
      <TCollapse :modelValue="tab == 'accord2'">
        <div class="px-3 py-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          placeat amet minus aperiam dicta doloremque facilis quis deserunt
          recusandae perspiciatis, omnis quo voluptate laboriosam sapiente
          maiores nam vel esse explicabo? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Corrupti placeat amet minus aperiam
          dicta doloremque facilis quis deserunt recusandae perspiciatis, omnis
          quo voluptate laboriosam sapiente maiores nam vel esse explicabo?
        </div>
      </TCollapse>

      <TButton @click="tab = 'accord3'" class="px-3 py-1">
        <div class="pointer-events-none flex items-center text-start">
          <div class="flex-auto font-semibold uppercase">Accordion 3</div>
          <TIcon
            name="expand_more"
            class="transition-transform"
            :class="{ '-rotate-90': tab != 'accord3' }"
          />
        </div>
      </TButton>
      <TCollapse :modelValue="tab == 'accord3'">
        <div class="px-3 py-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          placeat amet minus aperiam dicta doloremque facilis quis deserunt
          recusandae perspiciatis, omnis quo voluptate laboriosam sapiente
          maiores nam vel esse explicabo?
        </div>
      </TCollapse>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("accord1");
</script>
