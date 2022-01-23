import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "@/components/Dashboard.vue";
import HeroDetail from "@/components/Hero-detail.vue";
import Heroes from "@/components/Heroes.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", component: Dashboard },
  { path: "/detail/:id", component: HeroDetail },
  { path: "/heroes", component: Heroes },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
