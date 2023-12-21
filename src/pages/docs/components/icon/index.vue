<template>
  <PageBlock title="Icon" :properties="IconProps" :dir="dirs">
    <template #intro>
      <div class="max-w-3xl px-3 py-1 text-lg">
        A component to render Google's
        <a
          href="https://fonts.google.com/icons?icon.style=Outlined&icon.set=Material+Icons"
          target="_blank"
          class="text-primary hover:underline"
        >
          Matrial Icons
        </a>
      </div>
    </template>
    <div class="grid max-w-3xl gap-5">
      <div id="sizes" class="grid gap-4">
        <div class="text-3xl font-bold text-primary">Sizes</div>
        <div>
          Icon sizes are derived from existing tailwindcss text sizes and are
          selected in accordance with material design icons guidelines. Refer to
          the size below:
        </div>
        <div class="border border-warning bg-warning/25 px-3">
          <span class="font-semibold">Note!</span> Line height is ignored in all
          sizes. The icon will have a classname of "!leading-none" which sets
          line height to 1. This is to avoid any additional spaces at the top
          and bottom of the icon.
        </div>
        <div class="">
          <table class="w-full max-w-lg font-mono">
            <thead class="[&>tr>th]:text-start">
              <tr class="border-b-2 border-foreground/25 text-lg">
                <th>Size</th>
                <th>TW Size</th>
                <th>CSS</th>
              </tr>
            </thead>
            <tbody
              class="divide-y divide-foreground/25 [&>tr>*:nth-child(2)]:text-orange-800 dark:[&>tr>*:nth-child(2)]:text-orange-400 last:[&>tr>td]:py-2"
            >
              <template v-for="s in sizes" :key="s.size">
                <tr>
                  <td>{{ s.size }}</td>
                  <td>{{ s.tw }}</td>
                  <td>
                    <CodeBlock :code="s.css" class="px-3 py-1 text-sm" />
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageBlock>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import IconProps from "./props.json";

const PageBlock = defineAsyncComponent(() =>
  import("../../utils/pageBlock.vue")
);
const CodeBlock = defineAsyncComponent(() =>
  import("../../utils/codeBlock.vue")
);

const dirs = computed(() => [
  {
    label: "Sizes",
    name: "sizes",
  },
]);

const sizes = [
  {
    size: "xs",
    tw: "text-sm",
    css: "font-size: 0.875rem /* 14px */;\nline-height: 1.25rem /* 20px */;",
  },
  {
    size: "sm",
    tw: "text-lg",
    css: "font-size: 1.125rem /* 18px */;\nline-height: 1.75rem /* 28px */;",
  },
  {
    size: "md",
    tw: "text-2xl",
    css: "font-size: 1.5rem /* 24px */;\nline-height: 2rem /* 32px */;",
  },
  {
    size: "lg",
    tw: "text-4xl",
    css: "font-size: 2.25rem /* 36px */;\nline-height: 2.5rem /* 40px */;",
  },
  {
    size: "xl",
    tw: "text-5xl",
    css: "font-size: 3rem /* 48px */;\nline-height: 1;",
  },
  {
    size: "2xl",
    tw: "text-6xl",
    css: "font-size: 3.75rem /* 60px */;\nline-height: 1;",
  },
  {
    size: "3xl",
    tw: "text-7xl",
    css: "font-size: 4.5rem /* 72px */;\nline-height: 1;",
  },
  {
    size: "4xl",
    tw: "text-8xl",
    css: "font-size: 6rem /* 96px */;\nline-height: 1;",
  },
  {
    size: "5xl",
    tw: "text-9xl",
    css: "font-size: 8rem /* 128px */;\nline-height: 1;",
  },
];
</script>
