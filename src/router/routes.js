export default [
  {
    path: "/",
    component: () => import("@/layouts/public.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("@/pages/home/index.vue"),
        meta: {
          title: import.meta.env.VITE_PRODUCT_NAME,
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/docs.vue"),
    children: [
      {
        path: "/docs",
        component: () => import("@/pages/docs/index.vue"),
        children: [
          {
            path: "packages",
            name: "packages",
            component: () => import("@/pages/docs/packages/index.vue"),
            meta: {
              title: "Packages",
            },
          },
          {
            path: "components",
            name: "components",
            component: () => import("@/pages/docs/components/index.vue"),
            meta: {
              title: "Components",
            },
            children: [
              {
                path: "button",
                name: "button",
                component: () =>
                  import("@/pages/docs/components/button/index.vue"),
                meta: {
                  title: "Button",
                },
              },
              {
                path: "icon",
                name: "icon",
                component: () =>
                  import("@/pages/docs/components/icon/index.vue"),
                meta: {
                  title: "Icons",
                },
              },
              {
                path: "input",
                name: "input",
                component: () =>
                  import("@/pages/docs/components/input/index.vue"),
                meta: {
                  title: "Input",
                },
              },
              {
                path: "size-observer",
                name: "sizeobserver",
                component: () =>
                  import("@/pages/docs/components/sizeObserver/index.vue"),
                meta: {
                  title: "Size Observer",
                },
              },
              {
                path: "field-wrapper",
                name: "fieldwrapper",
                component: () =>
                  import("@/pages/docs/components/fieldWrapper/index.vue"),
                meta: {
                  title: "Field Wrapper",
                },
              },
              {
                path: "collapse",
                name: "collapse",
                component: () =>
                  import("@/pages/docs/components/collapse/index.vue"),
                meta: {
                  title: "Collapse",
                },
              },
              {
                path: "dialog",
                name: "dialog",
                component: () =>
                  import("@/pages/docs/components/dialog/index.vue"),
                meta: {
                  title: "Dialog",
                },
              },
            ],
          },
          {
            path: "scripts",
            name: "scripts",
            meta: { title: "Scripts" },
            component: () => import("@/pages/docs/scripts/index.vue"),
            children: [
              {
                path: "inputfield",
                name: "inputfield",
                component: () =>
                  import("@/pages/docs/scripts/inputField/index.vue"),
                meta: {
                  title: "Input Field",
                },
              },
            ],
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
