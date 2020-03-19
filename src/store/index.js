import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

import counter from "./modules/counter";
import user from "./modules/user";
import car from "./modules/car";
let store = new Vuex.Store({
  modules: {
    counter,
    user,
    car
  }
});
export default store;
