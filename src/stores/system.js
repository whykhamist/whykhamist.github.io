import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", {
  state: () => ({
    loadingMessage: null,
    theme: {
      dark: false,
    },
    settings: {
      sidebar: {
        collapsed: false,
      },
      navbar: {
        fixed: false,
      },
      pwa: {
        doNotShow: false,
        offline: {
          ready: false,
          confirm: false,
        },
      },
    },

    connectivity: {
      online: true,
    },

    lockScreen: {
      pin: null,
      locked: null,
    },
  }),
  getters: {
    isLoading(state) {
      return !!state.loadingMessage;
    },
  },
  actions: {
    setLoading(message = null) {
      this.loadingMessage = message;
    },
    toggleTheme(joke = false) {
      if (!joke) {
        this.theme.dark = !this.theme.dark;
      }
      if (this.theme.dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    toggleFixedNavbar() {
      this.settings.navbar.fixed = !this.settings.navbar.fixed;
    },

    reset() {
      this.$reset();
    },

    setPin(pin) {
      this.lockScreen.pin = Helpers.crypt(pin);
    },
    lock() {
      this.lockScreen.locked = new Date();
    },
    unlock(pin) {
      if (this.verifyPin(pin)) {
        this.lockScreen.locked = null;
      }
    },
    resetPin() {
      this.lockScreen.locked = this.lockScreen.pin = null;
    },

    verifyPin(pin) {
      return this.lockScreen.pin == Helpers.crypt(pin);
    },
  },
});
