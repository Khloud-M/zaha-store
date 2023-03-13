import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
// import ui component and public component
import BaseButton from './components/ui/BaseButton.vue'
import LandingPage from './components/layout/LandingPage.vue'
import ProductItem from '@/components/Products/PorductItem.vue';
import CartShop from './components/layout/CartShop.vue';

// import bootstap 
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// animation library
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "vuetify/dist/vuetify.min.css";


const vuetify = createVuetify({
  components,
  directives,
})
// import toast tontifaction
import ToastPlugin from 'vue-toast-notification';
// import css file 
import "@/assets/style/main.css"
import "@/assets/style/form.css"
// import axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// axios.defaults.baseURL='https://backend.zahaaksa.com/api';
import VOtpInput from "vue3-otp-input";


createApp(App)
.use(router)
.use(store)
.use(Vuex)
.use(bootstrap)
.use(vuetify)
.use(ToastPlugin)
.use(VueAxios, axios)
.component("bace-button", BaseButton)
.component("landing-page", LandingPage)
.component("product-item", ProductItem)
.component("cart-shop", CartShop)
.component('v-otp-input', VOtpInput)
.mount('#app')
