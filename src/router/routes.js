export default [
  {
    path: "/",
    component: () => import("@/layouts/main.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("@/pages/home/index.vue"),
        meta: {
          title: import.meta.env.VITE_PRODUCT_NAME,
        },
      },
      {
        path: "/docs",
        component: () => import("@/pages/docs/index.vue"),
        children: [
          {
            path: "button",
            name: "button",
            component: () => import("@/pages/docs/components/button/index.vue"),
            meta: {
              title: "Button",
            },
          },
          {
            path: "input",
            name: "input",
            component: () => import("@/pages/docs/components/input/index.vue"),
            meta: {
              title: "Input",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/auth.vue"),
    children: [
      {
        path: "/unauthorized",
        name: "401",
        component: () => import("@/pages/error/401.vue"),
        meta: {
          title: "Unauthorized",
        },
      },
      {
        path: "/forbidden",
        name: "403",
        component: () => import("@/pages/error/403.vue"),
        meta: {
          title: "Forbidden",
        },
      },
      // Always leave this as last one,
      // but you can also remove it
      {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: () => import("@/pages/error/404.vue"),
        meta: {
          title: "Not Found",
        },
      },
    ],
  },
];
