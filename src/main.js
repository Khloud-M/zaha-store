import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
// import ui component
import BaseButton from './components/ui/BaseButton.vue'
// import css file 
import "@/assets/style/main.css"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
.use(router)
.use(store)
.use(Vuex)
.use(vuetify)
.component("bace-button", BaseButton)
.mount('#app')
