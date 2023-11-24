import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useSystemStore } from "@/stores";

const Router = createRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
  history: createWebHistory(),
  routes,
});

const routeGuard = (to, from) => {
  return new Promise((resolve, reject) => {
    const systemStore = useSystemStore();

    const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);

    const previousNearestWithMeta = from.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.metaTags);

    if (nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
    } else {
      document.title = import.meta.env.VITE_SHORT_NAME;
    }

    if (
      to.meta.startPageLoading === undefined ||
      to.meta.startPageLoading === true
    ) {
      systemStore.setLoading("Loading Page...");
    }

    if (!!to.meta.redirect) {
      reject(to.meta.redirect);
    }
    resolve();
  });
};

Router.beforeEach(async (to, from, next) => {
  try {
    await routeGuard(to, from);
    next();
  } catch (error) {
    next(error);
  }
});

Router.afterEach((to, from) => {
  const systemStore = useSystemStore();
  systemStore.setLoading(null);
});
export default Router;
