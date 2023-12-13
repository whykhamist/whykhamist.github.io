import { ref } from "vue";
import { useSystemStore } from "@/stores";
import { registerSW } from "virtual:pwa-register";

export default {
  install: async (app) => {
    const updateSW = ref(
      registerSW({
        onOfflineReady: () => {
          const system = useSystemStore();
          system.settings.pwa.offline.ready = true;
          system.settings.pwa.offline.confirm = false;
        },
        onNeedRefresh: () => {},
      })
    );

    await updateSW.value();
    app.provide("updateSW", updateSW);
  },
};
