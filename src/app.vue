<template>
  <div v-if="devt" :style="style" class="h-screen w-screen"></div>
  <template v-else>
    <router-view v-slot="{ Component }">
      <transition
        enter-from-class="opacity-0 blur-md"
        leave-to-class="opacity-0 blur-md"
        enter-active-class="transition duration-300 delay-300"
        leave-active-class="transition duration-300"
        @before-leave="transitioning = true"
        @after-enter="transitioning = false"
      >
        <component :is="Component"> </component>
      </transition>
    </router-view>
    <teleport to="body">
      <NotificationGroup group="main">
        <div
          class="pointer-events-none fixed inset-0 z-[1070] flex items-end justify-end p-6 px-4 py-6"
        >
          <div class="w-full max-w-sm">
            <Notification
              v-slot="{ notifications, close, hovering }"
              enter="transform ease-out duration-300 transition"
              enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
              enter-to="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-500"
              leave-from="opacity-100"
              leave-to="opacity-0"
              move="transition duration-500"
              move-delay="delay-300"
            >
              <div
                v-for="notification in notifications"
                :key="notification.id"
                class="relative mx-auto mt-4 flex w-full max-w-sm overflow-hidden rounded-lg shadow-md"
                :class="[
                  notification.classes?.wrapper,
                  (notification.hoverable || notification.closable) &&
                    'pointer-events-auto',
                ]"
                @mouseover="
                  notification.hoverable && hovering(notification.id, true)
                "
                @mouseenter="
                  notification.hoverable && hovering(notification.id, true)
                "
                @mouseleave="
                  notification.hoverable && hovering(notification.id, false)
                "
              >
                <div
                  v-if="!!notification.icon"
                  class="flex w-12 items-center justify-center"
                  :class="notification.classes?.iconWrapper"
                >
                  <TIcon
                    :name="notification.icon"
                    size="lg"
                    :class="notification.classes?.icon"
                  />
                </div>

                <div class="-mx-3 px-4 py-2">
                  <div class="mx-3">
                    <span
                      class="font-semibold"
                      :class="notification.classes?.title"
                    >
                      {{ notification.title }}
                    </span>
                    <p
                      v-if="!!notification.text"
                      class="text-sm"
                      :class="notification.classes?.text"
                    >
                      {{ notification.text }}
                    </p>
                  </div>
                </div>

                <div
                  v-if="notification.closable"
                  class="absolute right-2 top-2 flex items-center justify-center"
                >
                  <TButton
                    icon="close"
                    iconSize="xs"
                    class="rounded-full p-0.5"
                    @click="close(notification.id)"
                  />
                </div>
              </div>
            </Notification>
          </div>
        </div>
      </NotificationGroup>
      <TPageLoader />
      <DevtBlocked message="You are NOT ALLOWED to view source!" />
    </teleport>
    <InstallPrompt />
    <OfflineReadyPrompt />
    <Refresher />
  </template>
</template>

<script setup>
import { computed, defineAsyncComponent, inject, ref, watch } from "vue";
import InstallPrompt from "@/components/others/pwaInstallPrompt.vue";
import DevtBlocked from "@/components/others/devtBlocked.vue";
const devt = inject("devt");

const OfflineReadyPrompt = defineAsyncComponent(() =>
  import("@/plugins/pwa/offlineReadyPrompt.vue")
);
const Refresher = defineAsyncComponent(() =>
  import("@/plugins/pwa/refreshPrompt.vue")
);

const transitioning = ref(false);

const imageURL = new URL("@/assets/rick.gif", import.meta.url).href;
const style = computed(() => ({
  background: `url('${imageURL}')`,
}));

watch(transitioning, (val) => {
  if (val) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }
});
</script>
