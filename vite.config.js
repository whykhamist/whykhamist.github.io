import { defineConfig, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: "/",
    css: {
      devSourcemap: true,
    },
    plugins: [
      vue(),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",
        devOptions: {
          enabled: true,
        },
        workbox: {
          disableDevLogs: true,
          globPatterns: ["**/*.{js,css,html,ico,png,svg,vue,woff,woff2}"],
        },
        includeAssets: [
          "favicons/favicon.ico",
          "favicons/apple-touch-icon.png",
          "favicons/masked-icon.svg",
        ],
        manifest: {
          name: env.VITE_PRODUCT_NAME,
          short_name: env.VITE_SHORT_NAME,
          description: env.VITE_DESCRIPTION,
          theme_color: "#ffffff",
          icons: [
            {
              src: "favicons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "favicons/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@vue/runtime-core":
          "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
        "@": path.resolve(__dirname, "./src"),
        "~": path.resolve(__dirname, "./"),
        composables: path.resolve(__dirname, "./src/plugins/composables"),
      },
    },
    server: {
      host: "127.0.0.1",
      https: false,
      port: 8084,
      open: "http://127.0.0.1:8084", // opens browser window automatically
    },
    transpileDependencies: true,
    optimizeDeps: {
      include: ["tailwind.config.cjs"],
    },
    build: {
      commonjsOptions: {
        include: ["tailwind.config.cjs", "node_modules/**"],
      },
    },
  });
};
