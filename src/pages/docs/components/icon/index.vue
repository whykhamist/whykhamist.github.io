<template>
  <PageBlock title="Icon" :properties="IconProps" :dir="dirs">
    <template #intro>
      <div class="max-w-3xl px-3 py-1 text-lg font-semibold">
        A component to render Google's
        <a
          href="https://fonts.google.com/icons?icon.style=Outlined&icon.set=Material+Icons"
          target="_blank"
          class="text-primary"
        >
          Matrial Icons
        </a>
      </div>
    </template>
    <div class="grid max-w-3xl gap-5">
      <div ref="sizeSect" class="grid gap-4">
        <div class="text-3xl font-bold text-primary">Size</div>
        <div>
          Icon sizes are derived from existing tailwindcss text sizes and are
          selected in accordance with material design icons guidelines. Refer to
          the size below:
        </div>
        <div>
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
              <tr>
                <td>xs</td>
                <td>text-sm</td>
                <td>
                  <CssBlock label="font-size" val="0.875rem" comment="14px" />
                  <CssBlock label="line-height" val="1.25rem" comment="20px" />
                </td>
              </tr>
              <tr>
                <td>sm</td>
                <td>text-lg</td>
                <td>
                  <CssBlock label="font-size" val="1.125rem" comment="18px" />
                  <CssBlock label="line-height" val="1.75rem" comment="28px" />
                </td>
              </tr>
              <tr>
                <td>md</td>
                <td>text-2xl</td>
                <td>
                  <CssBlock label="font-size" val="1.5rem" comment="24px" />
                  <CssBlock label="line-height" val="2rem" comment="32px" />
                </td>
              </tr>
              <tr>
                <td>lg</td>
                <td>text-4xl</td>
                <td>
                  <CssBlock label="font-size" val="2.25rem" comment="36px" />
                  <CssBlock label="line-height" val="2.5rem" comment="40px" />
                </td>
              </tr>
              <tr>
                <td>xl</td>
                <td>text-5xl</td>
                <td>
                  <CssBlock label="font-size" val="3rem" comment="48px" />
                  <CssBlock label="line-height" val="1" />
                </td>
              </tr>
              <tr>
                <td>2xl</td>
                <td>text-6xl</td>
                <td>
                  <CssBlock label="font-size" val="3.75rem" comment="60px" />
                  <CssBlock label="line-height" val="1" />
                </td>
              </tr>
              <tr>
                <td>3xl</td>
                <td>text-7xl</td>
                <td>
                  <CssBlock label="font-size" val="4.5rem" comment="72px" />
                  <CssBlock label="line-height" val="1" />
                </td>
              </tr>
              <tr>
                <td>4xl</td>
                <td>text-8xl</td>
                <td>
                  <CssBlock label="font-size" val="6rem" comment="96px" />
                  <CssBlock label="line-height" val="1" />
                </td>
              </tr>
              <tr>
                <td>5xl</td>
                <td>text-9xl</td>
                <td>
                  <CssBlock label="font-size" val="8rem" comment="128px" />
                  <CssBlock label="line-height" val="1" />
                </td>
              </tr>
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

const PageBlock = defineAsyncComponent(() => import("../pageBlock.vue"));
const CssBlock = defineAsyncComponent(() => import("./css.vue"));

const sizeSect = ref(null);

const dirs = computed(() => [
  {
    label: "Sizes",
    el: sizeSect.value,
  },
]);
</script>
