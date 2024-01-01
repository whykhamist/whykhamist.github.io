<template>
  <PageBlock title="Packages">
    <p>Here's a list of 3rd party packages installed in this template.</p>
    <div class="rounded-lg border border-foreground/25 p-1">
      <table class="w-full">
        <thead>
          <tr
            class="divide-x divide-foreground/25 border-b border-foreground/25 *:sticky *:bg-background *:px-2 *:py-1 *:text-start *:text-lg *:font-semibold *:shadow-md *:shadow-foreground"
            :class="{
              '*:top-[106.1px]': systemStore.settings.navbar.fixed,
              '*:top-0': !systemStore.settings.navbar.fixed,
            }"
          >
            <th class="">Name</th>
            <th class="">Packages</th>
            <th class="w-11">Dev</th>
            <th class="w-24">Website</th>
            <th class="w-24">Git Repo</th>
          </tr>
        </thead>
        <tbody
          class="divide-y divide-foreground/25 *:divide-x *:divide-foreground/25 *:*:px-2 *:*:py-1 odd:*:bg-foreground/5"
        >
          <template v-for="pkg in pkgs" :key="pkg.name">
            <tr>
              <td
                class="bg-primary bg-opacity-10 font-semibold dark:bg-opacity-5"
              >
                {{ pkg.name }}
              </td>
              <td>
                <template v-for="pk in pkg.packages" :key="pk">
                  <div class="leading-tight">{{ pk }}</div>
                </template>
              </td>
              <td>
                <div class="flex items-center justify-center">
                  <TIcon
                    :name="pkg.isDev ? 'check_box' : 'disabled_by_default'"
                    type="round"
                    :class="{
                      'text-positive': pkg.isDev,
                      'text-negative': !pkg.isDev,
                    }"
                  />
                </div>
              </td>
              <td>
                <a
                  v-if="!!pkg.website"
                  :href="pkg.website"
                  target="_blank"
                  class="font-semibold text-primary hover:underline"
                >
                  Link
                </a>
                <template v-else>-</template>
              </td>
              <td>
                <a
                  v-if="!!pkg.git"
                  :href="pkg.git"
                  target="_blank"
                  class="font-semibold text-primary hover:underline"
                >
                  Link
                </a>
                <template v-else>-</template>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div>
      <div class="text-3xl font-semibold">
        Packages to deprecate (to remove)
      </div>
      <ul class="list-disc pl-5 text-xl font-semibold *:py-1">
        <li>StickyBits</li>
      </ul>
    </div>
  </PageBlock>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
import { useSystemStore } from "@/stores";
const PageBlock = defineAsyncComponent(() => import("../utils/pageBlock.vue"));

const systemStore = useSystemStore();

const pkgs = ref([
  {
    packages: ["@floating-ui/dom"],
    isDev: false,
    name: "Floating UI",
    website: "https://floating-ui.com/",
    git: "https://github.com/floating-ui/floating-ui",
  },
  {
    packages: ["@headlessui-float/vue"],
    isDev: false,
    name: "Headless UI Float Vue",
    website: "https://headlessui-float.vercel.app/vue/quick-start.html",
    git: "https://github.com/ycs77/headlessui-float",
  },
  {
    packages: ["@headlessui/vue"],
    isDev: false,
    name: "Headless UI",
    website: "https://headlessui.com/",
    git: "https://github.com/tailwindlabs/headlessui#readme",
  },
  {
    packages: ["@tiptap/pm", "@tiptap/starter-kit", "@tiptap/vue-3"],
    isDev: false,
    name: "Tiptap",
    website: "https://tiptap.dev/docs/editor/installation/vue3",
    git: "https://github.com/ueberdosis/tiptap",
  },
  {
    packages: ["@vuepic/vue-datepicker"],
    isDev: false,
    name: "Vue Datepicker",
    website: "https://vue3datepicker.com/",
    git: "https://github.com/Vuepic/vue-datepicker",
  },
  {
    packages: ["@vueuse/components", "@vueuse/core"],
    isDev: false,
    name: "VueUse",
    website: "https://vueuse.org/functions.html",
    git: "https://github.com/vueuse/vueuse",
  },
  {
    packages: ["apexcharts", "vue3-apexcharts"],
    isDev: false,
    name: "ApexCharts.js",
    website: "https://apexcharts.com/docs/vue-charts/",
    git: "https://github.com/apexcharts/apexcharts.js",
  },
  {
    packages: ["axios"],
    isDev: false,
    name: "Axios",
    website: "https://axios-http.com/docs/intro",
    git: "https://github.com/axios/axios",
  },
  {
    packages: ["browser-image-compression"],
    isDev: false,
    name: "Browser Image Compression",
    website: "https://donaldcwl.github.io/browser-image-compression/",
    git: "https://github.com/Donaldcwl/browser-image-compression#readme",
  },
  {
    packages: ["dayjs"],
    isDev: false,
    name: "Day.js",
    website: "https://day.js.org/",
    git: "https://github.com/iamkun/dayjs/",
  },
  {
    packages: ["encrypt-storage"],
    isDev: false,
    name: "EncryptStorage",
    website: "",
    git: "https://github.com/michelonsouza/encrypt-storage#readme",
  },
  {
    packages: ["material-icons"],
    isDev: false,
    name: "Material Icons",
    website: "https://marella.me/material-icons/demo/",
    git: "https://github.com/marella/material-icons",
  },
  {
    packages: ["mime-db"],
    isDev: false,
    name: "mime-db",
    website: null,
    git: "https://github.com/jshttp/mime-db#readme",
  },
  {
    packages: ["notiwind"],
    isDev: false,
    name: "Notiwind",
    website: "https://notiwind-demo.netlify.app/",
    git: "https://github.com/emmanuelsw/notiwind",
  },
  {
    packages: ["pinia"],
    isDev: false,
    name: "Pinia",
    website: "https://pinia.vuejs.org/",
    git: "https://github.com/vuejs/pinia",
  },
  {
    packages: ["pinia-plugin-persistedstate-2"],
    isDev: false,
    name: "pinia-plugin-persistedstate-2",
    website: null,
    git: "https://github.com/iendeavor/pinia-plugin-persistedstate-2#readme",
  },
  {
    packages: ["pinia-shared-state"],
    isDev: false,
    name: "pinia-shared-state",
    website: null,
    git: "https://github.com/wobsoriano/pinia-shared-state#readme",
  },
  {
    packages: ["sortablejs", "sortablejs-vue3"],
    isDev: false,
    name: "Sortablejs Vue3",
    website: "https://sortablejs-vue3.maxleiter.com/",
    git: "https://github.com/MaxLeiter/sortablejs-vue3#readme",
  },
  {
    packages: ["stickybits"],
    isDev: false,
    name: "StickyBits",
    website: null,
    git: "https://github.com/yowainwright/stickybits#readme",
  },
  {
    packages: ["vue"],
    isDev: false,
    name: "Vue",
    website: "https://vuejs.org/",
    git: "https://github.com/vuejs/core#readme",
  },
  {
    packages: ["vue-accessible-color-picker"],
    isDev: false,
    name: "vue-accessible-color-picker",
    website: "https://vue-accessible-color-picker.netlify.app/",
    git: "https://github.com/kleinfreund/vue-accessible-color-picker#readme",
  },
  {
    packages: ["vue-qrcode-reader"],
    isDev: false,
    name: "Vue Qrcode Reader",
    website: "https://vue-qrcode-reader.netlify.app/",
    git: "https://github.com/gruhn/vue-qrcode-reader#readme",
  },
  {
    packages: ["vue-router"],
    isDev: false,
    name: "Vue Router",
    website: "https://router.vuejs.org/",
    git: "https://github.com/vuejs/router",
  },
  {
    packages: ["vue3-pdf-app"],
    isDev: false,
    name: "Vue3 Pdf App",
    website: null,
    git: "https://github.com/stellR42/vue3-pdf-app#readme",
  },
  {
    packages: ["tailwindcss"],
    isDev: true,
    name: "Tailwind CSS",
    website: "https://tailwindcss.com/",
    git: "https://github.com/tailwindlabs/tailwindcss#readme",
  },
  {
    packages: ["@tailwindcss/typography"],
    isDev: true,
    name: "Tailwind Typography",
    website: "https://tailwindcss.com/docs/typography-plugin",
    git: "https://github.com/tailwindlabs/tailwindcss-typography#readme",
  },
  {
    packages: ["tailwind-scrollbar"],
    isDev: true,
    name: "Scrollbar Plugin for Tailwind CSS",
    website: "https://tailwind-scrollbar-example.adoxography.repl.co/",
    git: "https://github.com/adoxography/tailwind-scrollbar#readme",
  },
  {
    packages: ["autoprefixer"],
    isDev: true,
    name: "Autoprefixer",
    website: null,
    git: "https://github.com/postcss/autoprefixer#readme",
  },
  {
    packages: ["cssnano"],
    isDev: true,
    name: "CSSNANO",
    website: "https://cssnano.co/",
    git: "https://github.com/cssnano/cssnano#readme",
  },
  {
    packages: ["laravel-echo"],
    isDev: true,
    name: "Laravel Echo",
    website: "https://laravel.com/docs/10.x/broadcasting",
    git: "https://github.com/laravel/echo#readme",
  },
  {
    packages: ["pdfjs-dist"],
    isDev: true,
    name: "PDF.js",
    website: "https://mozilla.github.io/pdf.js/",
    git: "https://github.com/mozilla/pdfjs-dist",
  },
  {
    packages: ["postcss"],
    isDev: true,
    name: "PostCSS",
    website: "https://postcss.org/",
    git: "https://github.com/postcss/postcss#readme",
  },
  {
    packages: ["postcss-import"],
    isDev: true,
    name: "postcss-import",
    website: null,
    git: "https://github.com/postcss/postcss-import#readme",
  },
  {
    packages: ["prettier"],
    isDev: true,
    name: "Prettier",
    website: "https://prettier.io/",
    git: "https://github.com/prettier/prettier#readme",
  },
  {
    packages: ["prettier-plugin-tailwindcss"],
    isDev: true,
    name: "prettier-plugin-tailwindcss",
    website:
      "https://tailwindcss.com/blog/automatic-class-sorting-with-prettier",
    git: "https://github.com/tailwindlabs/prettier-plugin-tailwindcss",
  },
  {
    packages: ["pusher-js"],
    isDev: true,
    name: "Pusher Channels Javascript Client",
    website: "https://pusher.com/docs/channels/getting_started/javascript/",
    git: "https://github.com/pusher/pusher-js#readme",
  },
  {
    packages: ["sass"],
    isDev: true,
    name: "Sass",
    website: "https://sass-lang.com/documentation/js-api/",
    git: "https://github.com/sass/dart-sass",
  },
  {
    packages: ["vite"],
    isDev: true,
    name: "Vite",
    website: "https://vitejs.dev/",
    git: "https://github.com/vitejs/vite#readme",
  },
  {
    packages: ["vite-plugin-pwa"],
    isDev: true,
    name: "PWA Vite Plugin",
    website: "https://vite-pwa-org.netlify.app/",
    git: "https://github.com/vite-pwa/vite-plugin-pwa#readme",
  },
]);
</script>
