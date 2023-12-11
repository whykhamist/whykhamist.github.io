import { watch } from "vue";
import { useSystemStore } from "@/stores";
import { registerSW } from "virtual:pwa-register";

export default {
  install(app) {
    const intervalMS = 15 * 60 * 1000;
    // const intervalMS = 1000;
    registerSW({
      imediate: true,
      onOfflineReady() {
        console.log("Offline Ready");
      },
      onRegisteredSW(swUrl, r) {
        r &&
          setInterval(async () => {
            if (!(!r.installing && navigator)) return;

            if ("connection" in navigator && !navigator.onLine) return;

            const resp = await fetch(swUrl, {
              cache: "no-store",
              headers: {
                cache: "no-store",
                "cache-control": "no-cache",
              },
            });

            if (resp?.status === 200) await r.update();
          }, intervalMS);
      },
    });
  },
};
