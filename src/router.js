import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "@/views/auth/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.requiresAuth;
  let token = localStorage.getItem("token");

  if (token && to.path === "/login") {
    return next("/");
  }

  if (authRequired && token == null) {
    return next({
      path: "/login",
      query: {
        returnUrl: to.path,
      },
    });
  } else {
    next();
  }
});

export default router;
