import { createStore } from 'vuex';
import Categery from '@/store/Categery/index.js'
import authModle from '@/store/auth/auth.js'
const store = createStore({
 modules:{
  Categery,
  authModle

 }
});
export default store;

