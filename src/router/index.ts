import LinksView from "@/views/LinksView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import CategoryView from "../views/CategoryView.vue";

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
    {
      path: "/links",
      name: "Links",
      component: LinksView,
    },
    {
      path: "/categories/:name",
      name: "Category",
      component: CategoryView,
    },
  ],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
