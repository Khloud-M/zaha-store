import { createRouter, createWebHistory } from "vue-router";
// main page header
import HomeView from "@/views/mainPage/TheIndex.vue";
import categore from "@/views/mainPage/TheCategories.vue";
import products from "@/views/mainPage/TheProducts.vue";
import contact from "@/views/mainPage/TheContact.vue";
import about from "@/views/mainPage/TheAbout.vue";
import HotOffer from "@/views/mainPage/HotOffer.vue";
import TheCheck from "@/views/mainPage/TheCheck.vue";
// product 
import ProductDetails from "@/components/Products/ProductDetails.vue"



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/categore",
      component: categore,
    },
    { path: "/products", component: products },
    { path: "/products/:id", component: ProductDetails  , props:true},
    { path: "/about", component: about },
    { path: "/contact", component: contact },
    { path: "/hotoffer", component: HotOffer },
    { path: "/:TheCheck", component: TheCheck },
    // auth page 
    { path: "/:auth", 
    component: () => import("@/views/auth/authContainer.vue"),
    props:true ,
    children:[
      { path: "", component: () => import("@/views/auth/RegisterPage.vue") },
      { path: "signIn", component: () => import("@/views/auth/SignIn.vue") },
      { path: "resetPass", component: () => import("@/views/auth/ResetPassword.vue") },
      { path: "varifecation", component: () => import("@/views/auth/VarifectionCode.vue") },
      { path: "newPasswrod", component: () => import("@/views/auth/NewPassword.vue") },
    ]
  },

  ],
  linkActiveClass: "active",
});

export default router;
