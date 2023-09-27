import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../components/UserList.vue"),
  },
];

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.VITE_BASE_URL), // di vite pakai ini
  routes,
});

export default router;
