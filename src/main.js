import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
// import ui component
import BaseButton from './components/ui/BaseButton.vue'
// import bootstap 
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import css file 
import "@/assets/style/main.css"

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
.mount('#app')
