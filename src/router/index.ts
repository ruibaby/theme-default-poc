import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/post",
      name: "Post",
      component: PostView,
    },
  ],
});

export default router;
