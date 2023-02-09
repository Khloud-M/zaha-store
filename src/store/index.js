import { createStore } from 'vuex';
import Categery from '@/store/Categery/index.js'
const store = createStore({
 modules:{
  Categery,
 }
});
export default store;
// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
