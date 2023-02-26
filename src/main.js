import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
// import ui component and public component
import BaseButton from './components/ui/BaseButton.vue'
import LandingPage from './components/layout/LandingPage.vue'
import ProductItem from '@/components/Products/PorductItem.vue';

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
// import css file 
import "@/assets/style/main.css"
import "@/assets/style/form.css"

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
.use(router)
.use(store)
.use(Vuex)
.use(bootstrap)
.use(vuetify)
.component("bace-button", BaseButton)
.component("landing-page", LandingPage)
.component("product-item", ProductItem)
.mount('#app')
