import { createRouter, createWebHistory } from "vue-router";
// main page header
import HomeView from "@/views/mainPage/HomeView.vue";
import categore from "@/views/mainPage/TheCategories.vue";
import products from "@/views/mainPage/TheProducts.vue";
import contact from "@/views/mainPage/TheContact.vue";
import about from "@/views/mainPage/TheAbout.vue";
import HotOffer from "@/views/mainPage/HotOffer.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categore",
      component: categore,
    },
    { path: "/products", component: products },
    { path: "/about", component: about },
    { path: "/contact", component: contact },
    { path: "/hotoffer", component: HotOffer },
  ],
  linkActiveClass: "active",
});

export default router;
